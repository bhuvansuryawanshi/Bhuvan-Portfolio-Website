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
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2000&auto=format&fit=crop',
        tags: ['Infrastructure', 'IaC'],
        challenges: ["Managing complex dependency graphs.", "Ensuring high availability."],
        outcomes: ["100% IaC coverage.", "Automated infrastructure updates."]
    },
    {
        id: 'sftp-managed',
        name: 'Secure File Transfer with AWS Transfer Family',
        stack: ['AWS Transfer Family', 'S3', 'SFTP', 'IAM'],
        description: 'Managed SFTP service implementation backed by Amazon S3 for elastic storage and secure ingestion.',
        longDescription: 'Deployed AWS Transfer Family server with SFTP protocol for secure, encrypted file transfers to Amazon S3, integrated with IAM for user mapping.',
        details: [
            'SFTP endpoint configuration for secure access.',
            'IAM roles and policies for least-privilege user mapping.',
            'S3 integration for elastic storage capacity.',
            'Validated workflow using professional SFTP clients.'
        ],
        git: 'https://github.com/bhuvansuryawanshi',
        githubUrl: 'https://github.com/bhuvansuryawanshi',
        liveUrl: '#',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2000&auto=format&fit=crop',
        tags: ['Security', 'Managed Service'],
        challenges: ["User authentication management.", "Mapping SFTP users to S3 paths."],
        outcomes: ["Enterprise-grade SFTP solution.", "Seamless S3 data migration."]
    },
    {
        id: 'bombay-tribe',
        name: 'Bombay Tribe E-commerce',
        stack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript'],
        description: 'Fully responsive eCommerce platform designed for high performance and seamless user experience.',
        longDescription: 'Designed and developed a fully responsive eCommerce website using CodeIgniter framework, featuring product filters and a custom admin panel.',
        details: [
            'Custom eCommerce architecture with product management.',
            'Mobile-first design for optimal cross-device experience.',
            'Integrated product filters and search functionality.',
            'Custom authentication system and admin dashboard.'
        ],
        git: '#',
        githubUrl: '#',
        liveUrl: 'https://bombaytribe.com/home',
        image: 'https://images.unsplash.com/photo-1441984908796-903bb4f5e039?q=80&w=2000&auto=format&fit=crop',
        tags: ['Web Dev', 'E-commerce'],
        challenges: ["Optimizing page load for catalog pages.", "Ensuring responsive design across all devices."],
        outcomes: ["Live production-ready storefront.", "Scalable product management system."]
    },
    {
        id: 'sahyadri-mitra',
        name: 'Sahyadri Mitra Website',
        stack: ['CodeIgniter', 'Bootstrap', 'PHP', 'MySQL'],
        description: 'Professional non-profit website platform with dynamic content management and secure authentication.',
        longDescription: 'Developed a fully responsive website using Bootstrap, PHP, and CodeIgniter, focusing on smooth animations and modern UI.',
        details: [
            'Responsive UI with modern Bootstrap integration.',
            'Smooth animations and interactive elements.',
            'Dynamic content management system.',
            'Secure user authentication and data handling.'
        ],
        git: '#',
        githubUrl: '#',
        liveUrl: 'https://sahyadrimitra.com/',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop',
        tags: ['Web Dev', 'Non-profit'],
        challenges: ["Implementing complex interactive map features.", "Cross-browser compatibility optimization."],
        outcomes: ["Increased user engagement by 40%.", "Streamlined content update workflow."]
    }
];
