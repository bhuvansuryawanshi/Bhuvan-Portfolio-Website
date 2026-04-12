import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Cloud, Terminal, Server, Shield, Github, Linkedin, Mail, ExternalLink,
  ChevronRight, Database, Container, Box, Award, Workflow, Send, CheckCircle2,
  Code2, Activity, Instagram
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Marquee from "@/components/Marquee";
import GlowCard from "@/components/GlowCard";
import DevOpsPipeline from "@/components/DevOpsPipeline";
import ProjectsSection from "@/components/ProjectsSection";
import AboutMe from "@/components/AboutMe";
import TerminalSection from "@/components/TerminalSection";
import FloatingTerminal from "@/components/FloatingTerminal";
import FieldNotes from "@/components/FieldNotes";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const Index = () => {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/20 selection:text-primary pb-16 font-medium tracking-tight">

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">

        {/* --- HERO SECTION --- */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 gap-10 text-center w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 z-10 w-full"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border text-muted-foreground font-semibold text-[10px] tracking-[0.2em] shadow-sm uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500/80"></span>
              </span>
              system status: available
            </div>

            <div className="flex gap-4 md:gap-8 text-[9px] font-mono tracking-[0.2em] text-muted-foreground/50 uppercase mt-4">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> AWS-WEST: UP</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> CLUSTER-01: OK</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" /> LATENCY: 12ms</span>
            </div>

            <h1 className="text-[4.5rem] sm:text-[8rem] lg:text-[11rem] font-bold tracking-[-0.05em] text-foreground leading-[0.85] mt-4 flex flex-col items-center select-none w-full whitespace-nowrap">
              <span>Code.</span>
              <span className="text-muted-foreground/30">Automate.</span>
              <span>Deploy.</span>
            </h1>

            <p className="text-base text-muted-foreground max-w-[500px] leading-relaxed mt-2 font-normal">
              Fresh cloud enthusiast passionate about infrastructure automation, building scalable systems, and continuous integration.
            </p>

            <a
              href="https://github.com/bhuvansuryawanshi"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 mb-4 px-8 py-3.5 bg-foreground text-background font-bold tracking-wide text-xs rounded-full hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3 w-fit"
            >
              <Github size={18} />
              GITHUB
            </a>

          </motion.div>
        </section>
      </div>

      {/* Full width Marquee out of max-w constraints */}
      <div className="w-full bg-background/50 backdrop-blur-sm my-8 py-4 overflow-hidden relative z-10">
        <Marquee />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="py-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12 border-b border-transparent"
          >
            <motion.div variants={fadeInUp} className="flex justify-between items-end pb-6 border-b border-border">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-none">
                My Journey
              </h2>
              <span className="text-muted-foreground font-mono text-xs tracking-widest hidden md:block uppercase">04 Milestones</span>
            </motion.div>

            <div className="w-full pt-4">
              <DevOpsPipeline />
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full"
          >
            <AboutMe />
          </motion.div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects" className="py-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12 flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="text-left w-full flex flex-col items-start pb-6 border-b border-border mb-10">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-none mb-4">
                Projects
              </h2>
              <p className="text-muted-foreground font-medium text-sm uppercase tracking-widest">Featured Works & Case Studies</p>
            </motion.div>

            <div className="w-full">
              <ProjectsSection />
            </div>
          </motion.div>
        </section>

        {/* --- FIELD NOTES SECTION --- */}
        <section id="notes" className="py-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full"
          >
            <FieldNotes />
          </motion.div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills" className="py-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="flex justify-between items-center w-full pb-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">
                Tech Stack & Tools
              </h2>
              <div className="flex gap-4 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Core</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full border border-border" /> Tooling</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-t-0 border-l-0 border-border bg-card shadow-sm overflow-hidden rounded-md">
              {[
                { name: "AWS", core: true },
                { name: "DOCKER", core: true },
                { name: "K8S", core: true },
                { name: "TERRAFORM", core: true },
                { name: "LINUX", core: true },
                { name: "PYTHON", core: false },
                { name: "BASH", core: false },
                { name: "CI/CD", core: true },
                { name: "GRAFANA", core: false },
                { name: "VECTOR", core: false },
                { name: "CLICKHOUSE", core: false },
                { name: "CURSOR", core: false },
                { name: "CLAUDE", core: false },
                { name: "GIT", core: true },
                { name: "GITHUB", core: true },
              ].map((tech, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <div className="group relative flex flex-col items-center justify-center py-5 px-4 border-t border-l border-border bg-card hover:bg-accent transition-colors cursor-pointer w-full h-full">
                    <span className="font-bold text-xs tracking-wider text-foreground w-full text-center">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>


        {/* --- COMPACT FOOTER --- */}
        <section id="contact" className="py-4 relative z-10 border-t border-border mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            <p className="text-[10px] font-mono tracking-[0.2em] text-muted-foreground uppercase order-2 md:order-1">
              © {new Date().getFullYear()} Bhuvan Suryawanshi. DevOps & Cloud Engineer.
            </p>
            <div className="flex items-center gap-6 order-1 md:order-2">
              <a href="https://www.instagram.com/bhuvan_suryawanshi07" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors text-foreground shadow-sm group">
                <Instagram size={14} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:bhuvansuryawanshi0@gmail.com" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors text-foreground shadow-sm group">
                <Mail size={14} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        <FloatingTerminal />
      </div>
    </div>
  );
};

export default Index;
