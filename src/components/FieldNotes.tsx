import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { notes, categoryMeta, NoteCategory } from '@/lib/notes';

const FILTERS: { label: string; value: NoteCategory | 'all' }[] = [
    { label: 'All Logs', value: 'all' },
    { label: 'Optimization', value: 'optimization' },
    { label: 'DevOps', value: 'devops' },
    { label: 'AWS', value: 'aws' },
    { label: 'Experiment', value: 'experiment' },
];

const NoteCard = ({ note }: { note: (typeof notes)[0] }) => {
    const meta = categoryMeta[note.category];
    const dateFormatted = new Date(note.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: '2-digit',
    });

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300 flex flex-col"
        >
            <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Top row: category + date + metric */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${meta.color}`}>
                            {meta.label}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                            {dateFormatted}
                        </span>
                    </div>

                    {note.metric && (
                        <div className="flex items-center gap-1.5 bg-secondary px-3 py-1 rounded-full border border-border flex-shrink-0">
                            <TrendingDown size={11} className="text-emerald-400" />
                            <span className="text-[10px] font-mono font-bold text-muted-foreground line-through">{note.metric.before}</span>
                            <ArrowRight size={9} className="text-muted-foreground/50" />
                            <span className="text-[10px] font-mono font-bold text-emerald-400">{note.metric.after}</span>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {note.title}
                </h3>

                {/* One-liner summary */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {note.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {note.tags.slice(0, 4).map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-secondary text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest border border-border">
                            {tag}
                        </span>
                    ))}
                    {note.tags.length > 4 && (
                        <span className="text-[10px] font-mono text-muted-foreground self-center">+{note.tags.length - 4}</span>
                    )}
                </div>
            </div>

            {/* Read More footer */}
            <Link
                to={`/note/${note.id}`}
                className="flex items-center justify-between px-6 py-4 border-t border-border text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all group/link"
            >
                <span>Read Full Log</span>
                <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
        </motion.div>
    );
};

const FieldNotes = () => {
    const [activeFilter, setActiveFilter] = useState<NoteCategory | 'all'>('all');
    const filtered = activeFilter === 'all' ? notes : notes.filter(n => n.category === activeFilter);

    return (
        <div className="w-full py-16 relative z-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border mb-12">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-[1px] bg-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary font-mono">~/field-notes</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-none">
                        Dev Logs
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium mt-3 max-w-md">
                        Things I've experimented with, optimized, or learned on the job — captured as log entries.
                    </p>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    {notes.length} entries logged
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
                {FILTERS.map(f => (
                    <button
                        key={f.value}
                        onClick={() => setActiveFilter(f.value)}
                        className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 ${
                            activeFilter === f.value
                                ? 'bg-foreground text-background border-foreground'
                                : 'bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground'
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            <motion.div layout className="grid md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                    {filtered.map(note => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default FieldNotes;
