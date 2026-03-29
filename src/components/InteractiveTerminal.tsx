import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';

interface HistoryItem {
    id: number;
    type: 'command' | 'output' | 'system';
    content: string | React.ReactNode;
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const InteractiveTerminal = () => {
    const [input, setInput] = useState('');
    const [isTypingPhase, setIsTypingPhase] = useState(true);
    const [history, setHistory] = useState<HistoryItem[]>([
        { id: 1, type: 'system', content: 'Connecting to devops-cloud-server...' },
        { id: 2, type: 'system', content: 'Connection established. Welcome to BhuvanOS v2.4.0' }
    ]);
    const endRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initial Auto-Typing Sequence
    useEffect(() => {
        const runSequence = async () => {
            const commandsToRun = [
                { cmd: 'terraform init', delay: 1000 },
                { cmd: 'aws s3 ls', delay: 1500 },
                { cmd: 'whoami', delay: 1200 }
            ];

            for (const seq of commandsToRun) {
                await sleep(seq.delay);
                // Type out the command
                for (let i = 0; i <= seq.cmd.length; i++) {
                    setInput(seq.cmd.substring(0, i));
                    await sleep(100);
                }

                await sleep(300);
                // Submit command mapping logic (reusing handleCommand without the state update dependency cycle issues)
                handleCommandInternal(seq.cmd);
                setInput('');
            }

            setHistory(prev => [
                ...prev,
                { id: Date.now(), type: 'output', content: 'Interactive session started. Type "help" to see available commands.' }
            ]);
            setIsTypingPhase(false);
        };

        runSequence();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, input]);

    const handleCommandInternal = (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = '';

        if (!trimmedCmd) return;

        switch (trimmedCmd) {
            case 'help':
                output = (
                    <div className="text-gray-300">
                        Available commands:<br />
                        <span className="text-blue-400">whoami</span>   - Display user profile<br />
                        <span className="text-blue-400">skills</span>   - List technical skills<br />
                        <span className="text-blue-400">projects</span> - View latest deployments<br />
                        <span className="text-blue-400">clear</span>    - Clear terminal window<br />
                        <span className="text-blue-400">contact</span>  - Get contact information<br />
                        <span className="text-blue-400">terraform init</span> - Initialize backend<br />
                        <span className="text-blue-400">aws s3 ls</span>  - List buckets
                    </div>
                );
                break;
            case 'whoami':
                output = 'Bhuvan Suryawanshi - Cloud & DevOps Engineer focused on infrastructure automation, CI/CD, and scalable cloud deployments.';
                break;
            case 'skills':
                output = 'AWS, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions, Linux, React, Python, CodeIgniter.';
                break;
            case 'projects':
                output = '1. CI/CD Pipeline with Flask & AWS\n2. Terraform AWS Multi-Tier Arch\n3. Secure File Transfer (AWS)';
                break;
            case 'contact':
                output = 'Email: bhuvansuryawanshi0@gmail.com | LinkedIn: bhuvan-suryawanshi';
                break;
            case 'terraform init':
                output = <span className="text-green-400 font-mono">Initializing the backend...<br />Initializing provider plugins...<br />Terraform has been successfully initialized!</span>;
                break;
            case 'aws s3 ls':
                output = <span className="font-mono text-gray-300">2026-03-20 10:29:05 core-infrastructure-tf-state<br />2026-03-20 10:29:06 production-app-assets</span>;
                break;
            case 'clear':
                setHistory([]);
                return;
            case 'sudo rm -rf /':
                output = <span className="text-red-500">Permission denied: nice try! 😉</span>;
                break;
            default:
                output = <span className="text-red-400">Command not found: {trimmedCmd}. Type "help" for a list of commands.</span>;
        }

        setHistory(prev => [
            ...prev,
            { id: Date.now(), type: 'command', content: cmd },
            { id: Date.now() + 1, type: 'output', content: output }
        ]);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isTypingPhase) {
            handleCommandInternal(input);
            setInput('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full h-full mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c]/90 backdrop-blur-xl shadow-2xl font-mono text-sm md:text-base flex flex-col"
            onClick={() => {
                if (!isTypingPhase) inputRef.current?.focus();
            }}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                    <TerminalIcon size={16} className="text-gray-400" />
                    <span className="text-gray-400 text-xs font-semibold tracking-wider">bhuvan@devops-root:~</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-500" />
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 h-[400px] md:h-[500px] overflow-y-auto cursor-text scrollbar-thin scrollbar-thumb-white/10 text-base md:text-lg leading-relaxed flex-1">
                <div className="space-y-4">
                    <AnimatePresence>
                        {history.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="whitespace-pre-wrap"
                            >
                                {item.type === 'system' && (
                                    <div className="text-gray-500 italic">{item.content}</div>
                                )}
                                {item.type === 'command' && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-green-400 font-bold">visitor@bhuvan:~$</span>
                                        <span className="text-white">{item.content}</span>
                                    </div>
                                )}
                                {item.type === 'output' && (
                                    <div className="text-gray-300 mt-1">{item.content}</div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <div className="flex items-center gap-2 relative mt-4">
                        <span className="text-green-400 font-bold">visitor@bhuvan:~$</span>
                        {isTypingPhase ? (
                            <div className="flex items-center">
                                <span className="text-white">{input}</span>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-2.5 h-5 bg-white ml-1"
                                />
                            </div>
                        ) : (
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                                spellCheck="false"
                                autoComplete="off"
                            />
                        )}
                    </div>
                    <div ref={endRef} />
                </div>
            </div>
        </motion.div>
    );
};

export default InteractiveTerminal;
