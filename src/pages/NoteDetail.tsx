import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, TrendingDown, ArrowRight, Terminal, CheckCircle2 } from 'lucide-react';
import { notes, categoryMeta } from '@/lib/notes';

const NoteDetail = () => {
    const { id } = useParams();
    const note = notes.find(n => n.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!note) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
                <h1 className="text-4xl font-bold text-foreground mb-4">Log Not Found</h1>
                <Link to="/#notes" className="text-primary hover:underline flex items-center gap-2 text-sm">
                    <ChevronLeft size={16} /> Back to Dev Logs
                </Link>
            </div>
        );
    }

    const meta = categoryMeta[note.category];
    const dateFormatted = new Date(note.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: '2-digit',
    });

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-[860px] mx-auto px-6 md:px-12 w-full">

                {/* Back Link */}
                <Link
                    to="/"
                    className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-14 transition-colors font-bold uppercase tracking-[0.2em] text-[10px]"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Dev Logs
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${meta.color}`}>
                                {meta.label}
                            </span>
                            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                                {dateFormatted}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground leading-[1.1]">
                            {note.title}
                        </h1>

                        {/* Metric */}
                        {note.metric && (
                            <div className="inline-flex items-center gap-3 bg-secondary border border-border rounded-2xl px-5 py-3">
                                <TrendingDown size={16} className="text-emerald-400" />
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-widest">{note.metric.label}</span>
                                    <span className="text-sm font-mono text-muted-foreground line-through">{note.metric.before}</span>
                                    <ArrowRight size={12} className="text-muted-foreground/50" />
                                    <span className="text-sm font-mono font-bold text-emerald-400">{note.metric.after}</span>
                                </div>
                            </div>
                        )}

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {note.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-0.5 rounded bg-secondary text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest border border-border">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border" />

                    {/* Body */}
                    <div className="space-y-4">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary font-mono">Background</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {note.body}
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="space-y-5">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary font-mono">What I Did</h2>
                        <ol className="space-y-4">
                            {note.steps.map((step, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex gap-4 items-start"
                                >
                                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                                </motion.li>
                            ))}
                        </ol>
                    </div>

                    {/* Code Snippet */}
                    {note.snippet && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <h2 className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary font-mono">Code Snippet</h2>
                                <span className="text-[10px] text-muted-foreground font-mono">— {note.snippet.label}</span>
                            </div>

                            {/* Terminal chrome */}
                            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
                                <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1e] border-b border-white/5">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                    <span className="ml-4 text-[10px] font-mono text-muted-foreground">{note.snippet.label}</span>
                                </div>
                                <pre className="bg-[#0d0d0f] px-6 py-6 text-[13px] font-mono text-[#a8b5c8] leading-[1.8] overflow-x-auto">
                                    <code>{note.snippet.code}</code>
                                </pre>
                            </div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default NoteDetail;
