import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        "ID": "project_01.json",
        "NAME": "CI/CD Pipeline with Flask & AWS",
        "STACK": ["GitHub Actions", "Docker", "Flask", "AWS EC2", "PostgreSQL"],
        "DESC": "Architected a complete CI/CD pipeline using Docker containerization and AWS EC2/RDS deployment.",
        "GIT": "https://github.com/bhuvansuryawanshi/CI-CD_Pipeline_with_Flask_AWS"
    },
    {
        "ID": "project_02.json",
        "NAME": "Terraform AWS Multi-Tier Arch",
        "STACK": ["Terraform", "VPC", "ALB", "Auto Scaling", "S3"],
        "DESC": "Built modular, reusable Terraform infrastructure with remote state management using S3 backend.",
        "GIT": "https://github.com/bhuvansuryawanshi/Terraform-AWS-Multi-Tier-Architecture"
    },
    {
        "ID": "project_03.json",
        "NAME": "Secure File Transfer (AWS)",
        "STACK": ["AWS Transfer Family", "S3", "SFTP", "IAM"],
        "DESC": "Deployed AWS Transfer Family server with SFTP protocol for secure, encrypted file transfers.",
        "GIT": "https://github.com/bhuvansuryawanshi"
    }
];

const ProjectsTerminal = () => {
    const [history, setHistory] = useState<any[]>([
        { type: 'output', content: "Welcome to Bhuvan's Portfolio v2.0.0" },
        { type: 'output', content: "Type 'help' to see available commands." }
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const cmd = input.trim();
            const lowerCmd = cmd.toLowerCase();
            const newHistory = [...history, { type: 'input', content: cmd }];

            if (lowerCmd === 'help') {
                newHistory.push({ type: 'output', content: 'Available commands:' });
                newHistory.push({ type: 'output', content: '  list      - List all available projects' });
                newHistory.push({ type: 'output', content: '  cat <doc> - View project details (e.g. cat project_01.json)' });
                newHistory.push({ type: 'output', content: '  clear     - Clear terminal' });
            } else if (lowerCmd === 'list') {
                newHistory.push({ type: 'output', content: 'Available projects:' });
                projects.forEach(p => {
                    newHistory.push({ type: 'output', content: `  📄 ${p.ID}   - ${p.NAME}` });
                });
            } else if (lowerCmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            } else if (lowerCmd.startsWith('cat ')) {
                const fileName = lowerCmd.split('cat ')[1].trim();
                const project = projects.find(p => p.ID.toLowerCase() === fileName);

                if (project) {
                    newHistory.push({ type: 'project', content: project });
                } else {
                    newHistory.push({ type: 'error', content: `cat: ${fileName}: No such file or directory` });
                }
            } else if (lowerCmd !== '') {
                newHistory.push({ type: 'error', content: `zsh: command not found: ${cmd}` });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div
            className="w-full max-w-[1200px] mx-auto rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl font-mono text-sm md:text-[15px] leading-relaxed relative cursor-text transition-all"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-center px-4 py-3 bg-[#2b2b2b] relative border-b border-black/20 select-none">
                <div className="absolute left-4 flex items-center gap-2 text-white">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-[#a0a0a0] text-xs font-semibold tracking-wide">
                    bhuvan - zsh - 80x24
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 h-[450px] overflow-y-auto text-[#d4d4d4] flex flex-col gap-2 relative scrollbar-hide">
                {history.map((line, idx) => (
                    <div key={idx} className="w-full">
                        {line.type === 'input' && (
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[#27c93f] font-bold">{'->'}</span>
                                <span className="text-[#3b82f6] font-bold">~</span>
                                <span className="text-white">{line.content}</span>
                            </div>
                        )}
                        {line.type === 'output' && (
                            <div className="mb-2 whitespace-pre mt-1">{line.content}</div>
                        )}
                        {line.type === 'error' && (
                            <div className="text-red-400 mb-2 mt-1">{line.content}</div>
                        )}
                        {line.type === 'project' && (
                            <div className="pl-0 my-4 space-y-2 border-l-2 border-[#3b82f6]/30 ml-2 pl-4">
                                <div><span className="text-[#ff9800] font-bold">NAME:</span> <span className="text-white">{line.content.NAME}</span></div>
                                <div><span className="text-[#6b7280] font-bold">STACK:</span> <span className="text-[#a3a3a3]">{line.content.STACK.join(', ')}</span></div>
                                <div><span className="text-[#6b7280] font-bold">DESC:</span> <span className="text-[#a3a3a3]">{line.content.DESC}</span></div>
                                {line.content.GIT && (
                                    <div className="pt-2">
                                        <a href={line.content.GIT} target="_blank" rel="noreferrer" className="text-[#3b82f6] hover:text-white underline transition-colors break-all">
                                            [View Repository]
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}

                {/* Active Input Line */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#27c93f] font-bold">{'->'}</span>
                    <span className="text-[#3b82f6] font-bold">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="flex-1 bg-transparent outline-none text-white border-none caret-white"
                        autoFocus
                    />
                </div>

                <div ref={bottomRef} />
            </div>

            {/* Scrollbar container mock from original screenshot */}
            <div className="absolute top-12 bottom-2 right-1 w-2 bg-white/5 rounded-full pointer-events-none" />
        </div>
    );
};

export default ProjectsTerminal;
