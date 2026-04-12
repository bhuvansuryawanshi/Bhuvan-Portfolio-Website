export const projects = [
    {
        id: 'terraform',
        name: 'Terraform AWS Multi-Tier Arch',
        stack: ['Terraform', 'VPC', 'ALB', 'Auto Scaling', 'S3'],
        description: 'Built modular, reusable Terraform infrastructure with remote state management using S3 backend.',
        longDescription: 'Designed and implemented a custom Amazon VPC with public/private subnets across 2 availability zones, route tables, IGW, and NAT Gateways for high availability.',
        details: [
            'Built modular, reusable Terraform infrastructure with 5 separate modules.',
            'Configured Auto Scaling Groups with launch templates and dynamic scaling.',
            'Implemented remote state management using S3 backend with DynamoDB locking.',
            'Used CloudFront CDN for global latency reduction.'
        ],
        git: 'https://github.com/bhuvansuryawanshi/Terraform-AWS-Multi-Tier-Architecture',
        githubUrl: 'https://github.com/bhuvansuryawanshi/Terraform-AWS-Multi-Tier-Architecture',
        liveUrl: '#',
        image: '/aws_multi_tier_arch.png',
        tags: ['Infrastructure', 'IaC'],
        challenges: ["Managing complex dependency graphs.", "Ensuring high availability."],
        outcomes: ["100% IaC coverage.", "Automated infrastructure updates."]
    },
    {
        id: 'sftp-managed',
        name: 'Secure File Transfer with AWS Transfer Family',
        stack: ['AWS Transfer Family', 'S3', 'SFTP', 'IAM', 'FileZilla'],
        description: 'Configured AWS Transfer Family with SFTP to enable secure, direct file transfers into Amazon S3 with scoped IAM access control per user.',
        longDescription: 'Set up a fully managed SFTP service using AWS Transfer Family, routing encrypted file transfers directly into Amazon S3. Implemented IAM roles and policies for scoped per user access, mapped SFTP users to specific S3 buckets and folder prefixes, and validated the end-to-end workflow using FileZilla as the SFTP client.',
        details: [
            'Configured an AWS Transfer Family server with SFTP protocol to enable secure, encrypted file transfers directly into Amazon S3 no underlying infrastructure to manage.',
            'Designed IAM roles and policies enforcing least-privilege access control, ensuring each SFTP user could only access their designated S3 path.',
            'Created and managed multiple SFTP users, each mapped to specific S3 buckets and folder prefixes for organized, isolated, and restricted storage per user.',
            'Validated the full end-to-end workflow by testing file uploads and downloads via FileZilla SFTP client, confirming reliable and secure transfer behavior.',
        ],
        git: 'https://github.com/bhuvansuryawanshi',
        githubUrl: 'https://github.com/bhuvansuryawanshi',
        liveUrl: '#',
        image: '/sftp_transfer.png',
        detailImage: null,
        tags: ['Security', 'Managed Service'],
        challenges: ["Scoping IAM policies per user without over-permissioning.", "Mapping SFTP users to isolated S3 bucket prefixes."],
        outcomes: ["Fully managed, serverless SFTP solution on AWS.", "Secure per-user file isolation with zero infrastructure overhead."]
    }
];
