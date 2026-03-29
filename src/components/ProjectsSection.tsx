import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/lib/projects';

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div 
            layout
            className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 h-full flex flex-col"
        >
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {project.tags.map((tag: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-bold text-foreground border border-white/10 uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.slice(0, 4).map((tool: string, i: number) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-secondary text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest border border-border">
                            {tool}
                        </span>
                    ))}
                    {project.stack.length > 4 && (
                        <span className="text-[10px] font-mono text-muted-foreground self-center">+{project.stack.length - 4} more</span>
                    )}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-border">
                    <Link 
                        to={`/project/${project.id}`}
                        className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors group/btn"
                    >
                        Read More <Plus size={14} className="group-hover/btn:rotate-90 transition-transform duration-300" />
                    </Link>
                    <div className="flex gap-4">
                        <a href={project.git} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const [showAll, setShowAll] = React.useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div className="w-full space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {visibleProjects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                        />
                    ))}
                </AnimatePresence>
            </div>

            {projects.length > 3 && (
                <div className="flex justify-center pt-8">
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        className="group relative flex flex-col items-center gap-2"
                    >
                        <div className="px-8 py-3 rounded-2xl bg-secondary hover:bg-primary transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-white border border-border flex items-center gap-3">
                           {showAll ? 'Collapse Archive' : 'Expand Project Archive'}
                           <motion.div
                             animate={{ rotate: showAll ? 180 : 0 }}
                             transition={{ duration: 0.5 }}
                           >
                             <Plus size={16} />
                           </motion.div>
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground/30 animate-pulse uppercase tracking-[0.2em] pt-2">
                           {showAll ? 'Hide secondary clusters' : `Load ${projects.length - 3} more nodes...`}
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectsSection;
