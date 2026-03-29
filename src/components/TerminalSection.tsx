import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Bot, User, Loader2 } from 'lucide-react';

// Consolidated Knowledge Base for the "AI"
const KNOWLEDGE = {
    name: "Bhuvan Suryawanshi",
    role: "DevOps & Cloud Engineer",
    location: "Maharashtra, India",
    email: "bhuvansuryawanshi0@gmail.com",
    github: "github.com/bhuvansuryawanshi",
    education: "B.Tech in Electronics & Telecommunication from R.C. Patel Institute of Technology (2020-2024).",
    certification: "AWS Cloud Practitioner (Active until 2027).",
    experience: [
        "Procedure Tech: DevOps & SRE Intern - CI/CD, Terraform, AWS, K8s.",
        "Manasvi Tech Solutions: Jr. Software Developer - React, PHP, MySQL."
    ],
    projects: [
        "CI/CD Pipeline with Flask & AWS: Automated deployment using GitHub Actions & Docker.",
        "Terraform AWS Multi-Tier: Modular infrastructure for highly available VPCs.",
        "Secure SFTP on AWS: Configured AWS Transfer Family with S3 and IAM."
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Linux", "CI/CD", "GitHub Actions", "Python", "Bash", "Vector", "Clickhouse"],
    hobbies: ["Photography", "Scaling mountains/Hiking", "Exploring new tech", "Tinkering with code."]
};

const BhuvanAI = {
    getResponse: async (query: string) => {
        const q = query.toLowerCase();
        
        // Simulate thinking delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (q.includes("project") || q.includes("work") || q.includes("build")) {
            return `I've built several cloud-native projects. Some highlights: ${KNOWLEDGE.projects.join(" | ")}. Which one should I explain in detail?`;
        }
        if (q.includes("experience") || q.includes("job") || q.includes("intern")) {
            return `My professional journey includes: ${KNOWLEDGE.experience.join(" and ")}. I specialize in cloud automation and SRE practices.`;
        }
        if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("tool")) {
            return `I'm proficient in ${KNOWLEDGE.skills.join(", ")}. I'm currently focused on observability with Vector and Clickhouse.`;
        }
        if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("degree")) {
            return `I hold a ${KNOWLEDGE.education}`;
        }
        if (q.includes("cert") || q.includes("aws cert")) {
            return `I'm an ${KNOWLEDGE.certification}`;
        }
        if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire")) {
            return `You can reach me at ${KNOWLEDGE.email} or find me on GitHub at ${KNOWLEDGE.github}.`;
        }
        if (q.includes("hobby") || q.includes("free time") || q.includes("personal")) {
            return `Outside of cloud engineering, I'm into ${KNOWLEDGE.hobbies.join(", ")}`;
        }
        if (q.includes("hello") || q.includes("hi") || q.includes("who are you")) {
            return `Hello! I'm Bhuvan's AI Assistant. I can tell you about his projects, technical expertise, or professional journey. Ask me anything!`;
        }
        if (q.includes("terraform")) {
            return `Terraform is my go-to for IaC. I've used it to build multi-tier AWS architectures with modular, reusable code and S3/DynamoDB remote state management.`;
        }
        if (q.includes("aws") || q.includes("cloud")) {
            return `I'm an AWS enthusiast (and Certified Cloud Practitioner). I have experience with EC2, S3, RDS, Transfer Family, IAM, and VPC networking.`;
        }
        if (q.includes("docker") || q.includes("container") || q.includes("kubernetes")) {
            return `I use Docker for containerizing microservices and have worked on managing workloads in Kubernetes clusters.`;
        }

        return "Interesting question! My 'knowledge base' is currently limited to Bhuvan's professional profile, but I'm learning. Try asking about his cloud projects or tech stack!";
    }
};

const TerminalSection = ({ isFloating = false }: { isFloating?: boolean }) => {
    const [input, setInput] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [history, setHistory] = useState<{ type: 'user' | 'ai' | 'sys', text: string }[]>([
        { type: 'sys', text: 'Initializing neural connection... [AUTH SUCCESS]' },
        { type: 'ai', text: 'Hello! I am Bhuvan\'s AI Assistant. You can ask me about his tech stack, cloud projects, or recent experience. Try clicking the suggested topics below!' }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history, isThinking]);

    const handleQuery = async (query: string) => {
        if (!query.trim() || isThinking) return;

        setHistory(prev => [...prev, { type: 'user', text: query }]);
        setInput('');
        setIsThinking(true);

        const response = await BhuvanAI.getResponse(query);
        
        setHistory(prev => [...prev, { type: 'ai', text: response }]);
        setIsThinking(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleQuery(input);
    };

    const suggestions = [
        "Tell me about your projects",
        "What are your core skills?",
        "How can I contact you?",
        "Show me your experience"
    ];

    return (
        <div className={`w-full max-w-4xl mx-auto rounded-3xl overflow-hidden ${!isFloating ? 'border border-border bg-[#0a0a0a] shadow-2xl relative' : ''}`}>
            {!isFloating && (
                <div className="flex items-center justify-between px-6 py-4 bg-[#111] border-b border-border">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        <Bot size={12} className="text-primary" />
                        Bhuvan-GPT-v1.0.active
                    </div>
                    <div className="w-10" />
                </div>
            )}

            <div 
                ref={scrollRef}
                className="p-8 h-[350px] overflow-y-auto font-mono text-xs md:text-sm leading-relaxed scroll-smooth"
            >
                <div className="space-y-6">
                    {history.map((line, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: line.type === 'user' ? 10 : -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`flex gap-4 ${line.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {line.type !== 'user' && (
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${line.type === 'sys' ? 'bg-secondary text-muted-foreground' : 'bg-primary/20 text-primary'}`}>
                                    {line.type === 'sys' ? <Terminal size={14} /> : <Bot size={14} />}
                                </div>
                            )}
                            
                            <div className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                                line.type === 'user' 
                                ? 'bg-primary text-primary-foreground font-bold' 
                                : line.type === 'sys'
                                ? 'bg-transparent text-muted-foreground/60 italic border border-border/50'
                                : 'bg-secondary/50 text-foreground border border-border'
                            }`}>
                                {line.text}
                            </div>

                            {line.type === 'user' && (
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0">
                                    <User size={14} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                    
                    {isThinking && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-4"
                        >
                            <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center animate-spin">
                                <Loader2 size={14} />
                            </div>
                            <div className="px-4 py-3 rounded-2xl bg-secondary/50 text-muted-foreground border border-border italic">
                                Analyzing request...
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>

            <div className="p-4 bg-[#0d0d0d] border-t border-border space-y-4">
                <div className="flex flex-wrap gap-2 px-2">
                    {suggestions.map((s, i) => (
                        <button 
                            key={i}
                            onClick={() => handleQuery(s)}
                            disabled={isThinking}
                            className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-secondary border border-border hover:border-primary/50 hover:text-primary transition-all disabled:opacity-30"
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="flex gap-3 bg-background/50 border border-border p-2 pr-4 rounded-2xl group transition-all focus-within:border-primary">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground group-focus-within:text-primary transition-colors">
                        <Terminal size={18} />
                    </div>
                    <input 
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={isThinking ? "AI is processing..." : "Ask me anything..."}
                        className="bg-transparent border-none outline-none flex-1 font-mono text-sm caret-primary focus:ring-0 placeholder:text-muted-foreground/30"
                        disabled={isThinking}
                        spellCheck="false"
                    />
                    <button 
                        type="submit"
                        disabled={!input.trim() || isThinking}
                        className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors disabled:opacity-30"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TerminalSection;
