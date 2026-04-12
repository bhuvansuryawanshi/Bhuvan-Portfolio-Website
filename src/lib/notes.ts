export type NoteCategory = 'optimization' | 'aws' | 'devops' | 'experiment';

export interface FieldNote {
    id: string;
    date: string;
    category: NoteCategory;
    title: string;
    summary: string;
    metric?: {
        label: string;
        before: string;
        after: string;
    };
    body: string;
    steps: string[];
    snippet?: {
        lang: string;
        label: string;
        code: string;
    };
    tags: string[];
}

export const notes: FieldNote[] = [
    {
        id: 'docker-image-slim',
        date: '2025-11-10',
        category: 'optimization',
        title: 'Optimized Docker Build for Next.js Monorepo',
        summary: 'The Docker image was huge and the build was slow. Switched to a multi stage build with Turborepo prune dropped build time from ~12 min to ~4-5 min.',
        metric: {
            label: 'Docker Build Time',
            before: '~12 min',
            after: '~4–5 min',
        },
        body: `The Docker image for our Next.js app was ~11GB uncompressed and took about 12 minutes to build in CI. The main reason was a single stage Dockerfile that packed everything into one image source code, test files, dev dependencies, even Playwright browsers that only e2e tests need. Also, COPY . . was at the top before yarn install, so every single code change wiped the cache and re-installed all packages from scratch, even if package.json didn't change.`,
        steps: [
            'The original Dockerfile did COPY . . first, then yarn install. This meant any file change invalidated the install cache. Fixed it by copying only package.json and yarn.lock first, then running install, then copying the source. Now yarn install only re-runs when dependencies actually change.',
            'Split the Dockerfile into 3 stages. First stage uses turbo prune to pull out only the web app from the monorepo ignoring e2e tests, test server, and other packages that don\'t need to be in production.',
            'Second stage does the actual build. Third stage (the one that actually ships) starts fresh from node:18-slim, copies only the compiled .next output and production node_modules no source, no dev tools, no test stuff.',
            'Added --production flag to yarn install in the final stage and ran yarn cache clean after, which removes the yarn download cache from the image. Small change, noticeable size difference.',
        ],
        snippet: {
            lang: 'dockerfile',
            label: 'Dockerfile 3-stage optimized build (envs removed)',
            code: `# ── Stage 1: Prune monorepo to only the web app ──────────────
FROM node:18-slim AS pruner
WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune web --docker

# ── Stage 2: Install deps + build ────────────────────────────
# Full node:18 (not slim) required for native module compilation
FROM node:18 AS builder
WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy only pruned package.jsons + lockfile first → cacheable layer
# Code changes won't invalidate this layer unless deps change
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile

# Now copy source and build
COPY --from=pruner /app/out/full/ .
RUN cd apps/web && yarn build && rm -rf .next/cache

# ── Stage 3: Minimal production runtime ──────────────────────
FROM node:18-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Production deps only — strips devDependencies + yarn cache
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/yarn.lock ./yarn.lock
RUN yarn install --frozen-lockfile --production && yarn cache clean

# Only the compiled build output — no source, no build tools
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/public ./apps/web/public

EXPOSE 3000
CMD ["sh", "-c", "cd apps/web && yarn start -H 0.0.0.0"]`,
        },
        tags: ['Docker', 'Multi-stage', 'Turborepo', 'Next.js', 'ECR', 'Monorepo'],
    },
    {
        id: 'github-actions-cache',
        date: '2025-11-10',
        category: 'devops',
        title: 'BuildKit Layer Caching in GitHub Actions for Ephemeral Runners',
        summary: 'Every CI run was downloading packages from scratch because GitHub runners are blank slates. I added BuildKit caching to reuse Docker layers between runs, skipping the install step entirely for code changes.',
        metric: {
            label: 'yarn install (code change)',
            before: '~3 min',
            after: '0 sec (cached)',
        },
        body: `Because GitHub Actions runners start fresh every time, our plain \`docker build\` command was re-downloading and re-installing all node_modules on every single pipeline run even if we just changed a typo in a React component. Plus, the workflow was installing Node.js on the runner itself, which was just wasting time since the build actually happened inside the Docker container.`,
        steps: [
            'Swapped out the plain \`make docker_build\` for the official \`docker/build-push-action\`. This let us hook directly into BuildKit and GitHub’s native cache backend.',
            'Added \`type=gha\` for both cache from and cache to. Instead of the layer cache disappearing when the runner dies, BuildKit saves the layers to GitHub Actions cache storage and pulls them back down on the next run.',
            'Used \`mode=max\` for the cache export so it saves every intermediate layer, not just the final packed image.',
            'Deleted the \`actions/setup-node\` step from the workflow. Since the build runs inside Docker, setting up Node on the host runner was completely unnecessary.',
            'Combined with the new multi-stage Dockerfile, this means code only changes now pull the heavy \`yarn install\` layer straight from the cache instead of rebuilding it.',
        ],
        snippet: {
            lang: 'yaml',
            label: '.github/workflows — before vs after build step',
            code: `# ── BEFORE ───────────────────────────────────────────────────
# Plain docker build — no cross-run layer caching possible
# Node.js setup on runner is wasted (build is inside Docker)

- name: Setup Node.js
  uses: actions/setup-node@v3
  with:
    node-version: 22.x

- name: Build and tag Docker image
  run: make docker_build


# ── AFTER ────────────────────────────────────────────────────
# BuildKit + GHA cache backend → layers persist across runs
# Code-only changes: yarn install step takes 0 sec (cached)

- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3

- name: Build and push Docker image
  uses: docker/build-push-action@v5
  with:
    context: .
    file: ./apps/web/Dockerfile
    push: false
    load: true
    tags: |
      app-image:$\{{ github.sha }}
      app-image:latest
    build-args: |
      NEXT_PUBLIC_APP_ENVIRONMENT=$\{{ env.NEXT_PUBLIC_APP_ENVIRONMENT }}
      NEXT_PUBLIC_BUILD_NUMBER=$\{{ env.NEXT_PUBLIC_BUILD_NUMBER }}
    cache-from: type=gha
    cache-to: type=gha,mode=max`,
        },
        tags: ['GitHub Actions', 'BuildKit', 'CI/CD', 'Docker', 'Caching', 'ECR'],
    },
];

export const categoryMeta: Record<NoteCategory, { label: string; color: string }> = {
    optimization: { label: 'Optimization', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
    aws: { label: 'AWS', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
    devops: { label: 'DevOps', color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    experiment: { label: 'Experiment', color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
};
