import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Github, Globe, Server, Code, Terminal, ChevronRight, Layout, Database, Shield } from 'lucide-react';
import { projects } from '@/lib/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
                <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
                <Link to="/" className="text-primary hover:underline flex items-center gap-2">
                    <ChevronLeft size={20} /> Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
                <Link 
                    to="/" 
                    className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 transition-colors font-bold uppercase tracking-[0.2em] text-[10px]"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Selection
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="flex gap-2 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-[10px] uppercase font-bold tracking-widest border border-border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground leading-[1] mb-8">
                                {project.name}
                            </h1>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                {project.longDescription}
                            </p>
                        </div>

                        <div className="pt-8 border-t border-border flex flex-wrap gap-8">
                            <div>
                                <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Platform</h4>
                                <span className="text-sm text-foreground font-semibold flex items-center gap-2"><Server size={14} className="text-primary" /> AWS Cloud</span>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Duration</h4>
                                <span className="text-sm text-foreground font-semibold flex items-center gap-2"><Globe size={14} className="text-primary" /> 3 Weeks</span>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2">Role</h4>
                                <span className="text-sm text-foreground font-semibold flex items-center gap-2"><Code size={14} className="text-primary" /> DevOps Engineer</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a 
                                href={project.git} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-3 px-8 py-3.5 bg-foreground text-background font-bold tracking-widest text-[10px] uppercase rounded-full hover:opacity-90 transition-all shadow-xl"
                            >
                                <Github size={18} />
                                View Repository
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Asset Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-border shadow-2xl relative group">
                            <img 
                                src={project.image} 
                                alt={project.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                        </div>
                        
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 md:-right-10 bg-card border border-border p-6 rounded-3xl shadow-xl flex items-center gap-4 z-20">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Security Status</h4>
                                <p className="font-bold text-foreground">Fully Hardened</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Lower Details */}
                <div className="mt-32 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary"><Terminal size={18} /></div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Infrastructure Steps</h4>
                        </div>
                        <ul className="space-y-4">
                            {project.details.map((detail, i) => (
                                <li key={i} className="flex gap-4 text-sm text-muted-foreground leading-relaxed">
                                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-primary flex-shrink-0" />
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary"><Layout size={18} /></div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Critical Challenges</h4>
                        </div>
                        <ul className="space-y-4">
                            {project.challenges?.map((challenge, i) => (
                                <li key={i} className="flex gap-4 text-sm text-muted-foreground leading-relaxed italic">
                                    <ChevronRight size={14} className="mt-1 flex-shrink-0 text-primary" />
                                    {challenge}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary"><Database size={18} /></div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground">Project Outcomes</h4>
                        </div>
                        <ul className="space-y-4">
                            {project.outcomes?.map((outcome, i) => (
                                <li key={i} className="flex gap-4 text-sm font-bold text-foreground leading-tight">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 text-[10px]">{i+1}</div>
                                    {outcome}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
