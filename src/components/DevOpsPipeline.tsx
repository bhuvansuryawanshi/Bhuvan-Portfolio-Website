import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, GraduationCap, Award, Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 'proc',
        title: 'Procedure Tech',
        role: 'DevOps Intern',
        period: '2025 - Present',
        location: 'Remote',
        icon: Server,
        color: 'blue',
        bullets: [
            'Configuring workflows and creating artifacts via CI/CD.',
            'Infrastructure automation and scalable service deployment via Terraform.',
            'Setting up observability, alerting, and log aggregation.'
        ],
        tools: ['Github Actions', 'Docker', 'Terraform', 'AWS', 'Kubernetes']
    },
    {
        id: 'manasvi',
        title: 'Manasvi Tech Solutions',
        role: 'Jr. Software Developer',
        period: '2024 - 2025',
        location: 'On-site',
        icon: Code,
        color: 'red',
        bullets: [
            'Developed dynamic websites with React & CodeIgniter.',
            'Implemented custom backend API services.',
            'Managed server deployment on shared hosting.'
        ],
        tools: ['React', 'PHP', 'JavaScript', 'MySQL']
    }
];

const educationData = [
    {
        title: "B.Tech in Electronics & Telecommunication",
        institution: "R.C. Patel Institute of Technology",
        period: "2020 - 2024",
        status: "Completed",
        icon: GraduationCap,
        color: "indigo"
    },
    {
        title: "Cloud Practitioner Certification",
        institution: "Amazon Web Services (AWS)",
        period: "2024 - 2027",
        status: "Active",
        icon: Award,
        color: "amber"
    }
];

const Journey = () => {
    return (
        <div className="w-full max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* --- EXPERIENCE COLUMN --- */}
                <div className="lg:col-span-12 xl:col-span-8 space-y-8">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/5">
                            <Briefcase size={20} />
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight text-foreground uppercase tracking-[0.1em]">Recent Experience</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-card/40 backdrop-blur-sm border border-border rounded-[2rem] p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-2xl ${exp.color === 'blue' ? 'bg-blue-500/10 text-blue-500' : 'bg-red-500/10 text-red-500'} border border-current/20`}>
                                            <exp.icon size={22} />
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-secondary text-[9px] font-mono font-bold text-muted-foreground border border-border">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <h4 className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-1 ${exp.color === 'blue' ? 'text-blue-500' : 'text-red-500'}`}>
                                        {exp.role}
                                    </h4>
                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {exp.title}
                                    </h3>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="flex gap-3 items-start text-[13px] text-muted-foreground leading-relaxed">
                                                <div className={`w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0 ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                                        {exp.tools.map((tool, i) => (
                                            <span key={i} className="px-2 py-1 rounded bg-secondary/80 text-[8px] font-bold text-muted-foreground uppercase tracking-widest border border-border">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- EDUCATION & CERT COLUMNS --- */}
                <div className="lg:col-span-12 xl:col-span-4 space-y-10">

                    {/* Education Subsection */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/5">
                                <GraduationCap size={20} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-[0.1em]">Education</h3>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative bg-card/60 backdrop-blur-sm border border-border rounded-[1.5rem] p-6 hover:border-primary/40 transition-all shadow-sm"
                        >
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-500 border border-current/10 flex-shrink-0">
                                    <GraduationCap size={22} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{educationData[0].period}</h4>
                                    <h3 className="font-bold text-foreground text-sm leading-snug mb-1">{educationData[0].title}</h3>
                                    <p className="text-[12px] text-muted-foreground">{educationData[0].institution}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Certification Subsection */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/5">
                                <Award size={20} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-foreground uppercase tracking-[0.1em]">Certification</h3>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative bg-card/60 backdrop-blur-sm border border-border rounded-[1.5rem] p-6 hover:border-primary/40 transition-all shadow-sm"
                        >
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-500 border border-current/10 flex-shrink-0">
                                    <Award size={22} />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{educationData[1].period}</h4>
                                    <h3 className="font-bold text-foreground text-sm leading-snug mb-1">{educationData[1].title}</h3>
                                    <p className="text-[12px] text-muted-foreground">{educationData[1].institution}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Journey;
