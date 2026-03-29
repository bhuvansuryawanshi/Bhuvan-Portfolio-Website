import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Coffee, Code2, Globe, Heart, Zap, Terminal, ExternalLink, Music, Disc } from 'lucide-react';

const stats = [
    { label: "Current Uptime", value: "24 Years", icon: Zap },
    { label: "Deployment Region", value: "Shirpur, Maharashtra", icon: MapPin },
    { label: "Fuel Type", value: "Chai", icon: Coffee },
    { label: "Stack Focus", value: "Cloud & DevOps", icon: Globe }
];

const personalJourney = [
    {
        title: "ALIBAG",
        description: "",
        img: "pic1.jpeg",
    },
    {
        title: "KARJAT",
        description: "",
        img: "pic2.jpeg",
    },
    {
        title: "JAIPUR",
        description: "",
        img: "pic3.jpeg",
    },
];

const AboutMe = () => {
    const [spotify, setSpotify] = useState<{ active: boolean, song: string, artist: string, albumArt: string } | null>(null);

    // LIVE SPOTIFY STATUS FETCH
    useEffect(() => {
        const discordId = "YOUR_DISCORD_ID_HERE";
        const fetchStatus = async () => {
            try {
                if (!discordId || discordId === "YOUR_DISCORD_ID_HERE") {
                    setSpotify({
                        active: true,
                        song: "Lo-fi Flow",
                        artist: "Cloud Frequency",
                        albumArt: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop"
                    });
                    return;
                }
                const res = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
                const data = await res.json();
                if (data.success && data.data.listening_to_spotify) {
                    const s = data.data.spotify;
                    setSpotify({ active: true, song: s.track, artist: s.artist, albumArt: s.album_art_url });
                } else {
                    setSpotify({ active: false, song: "", artist: "", albumArt: "" });
                }
            } catch (err) { console.error("Spotify fetch error:", err); }
        };
        fetchStatus();
        const interval = setInterval(fetchStatus, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="w-full py-20 px-4 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start md:items-center">

                {/* Left: Bio & Stats */}
                <div className="lg:col-span-5 space-y-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">System Profile</span>
                        </div>
                        <h2 className="text-4xl md:text-4xl font-bold tracking-tight text-foreground leading-none">
                            Beyond the <br /><span className="text-muted-foreground/30 italic">Terminal</span>
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed max-w-md font-normal border-l border-primary/20 pl-6">
                            I'm a DevOps engineer by day and an explorer by heart. When I'm not automating deployments, you'll find me capturing landscapes, exploring new music, or discovering new places.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 rounded-[2rem] bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-colors group"
                            >
                                <stat.icon size={18} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-1 font-mono">{stat.label}</h4>
                                <p className="text-sm font-bold text-foreground">{stat.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: Horizontal Scrolling Gallery */}
                <div className="lg:col-span-7 w-full overflow-hidden relative">
                    <div className="flex items-center justify-between mb-6 px-2">
                        <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-4">
                            Recent Logs <span className="w-12 h-[1px] bg-border border-dashed" />
                        </h3>
                        <span className="text-[9px] font-mono text-primary animate-pulse">scroll_to_explore →</span>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
                        {personalJourney.map((photo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex-shrink-0 w-[220px] md:w-[260px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-border snap-center group relative cursor-pointer"
                            >
                                <img
                                    src={photo.img}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                                    <h3 className="text-base font-bold text-white mb-1">{photo.title}</h3>
                                    <p className="text-[10px] text-white/50 leading-relaxed line-clamp-2">
                                        {photo.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        {/* Placeholder for "Add more" feel */}
                        <div className="flex-shrink-0 w-[160px] aspect-[4/5] rounded-[2rem] border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground/30 snap-center">
                            <Camera size={24} className="mb-3" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-center px-4">Log entries pending...</span>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        {/* Current Activity Badge */}


                        {/* LIVE SPOTIFY CARD */}
                        <a
                            href="https://open.spotify.com"
                            target="_blank"
                            rel="noreferrer"
                            className="block p-6 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all group relative overflow-hidden shadow-sm"
                        >
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl transition-all group-hover:bg-primary/10" />

                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-6">
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-border flex-shrink-0">
                                        <img
                                            src={spotify?.active ? spotify.albumArt : "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2670&auto=format&fit=crop"}
                                            className={`w-full h-full object-cover transition-transform duration-1000 ${spotify?.active ? 'group-hover:scale-125' : ''}`}
                                            alt="Album Art"
                                        />
                                        {spotify?.active && (
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Disc className="text-white animate-spin-slow" size={24} />
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-mono italic">
                                                [{spotify?.active ? 'LIVE_STREAMING' : 'OFFLINE'}]
                                            </h4>
                                            {spotify?.active && (
                                                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[8px] font-bold uppercase tracking-widest border border-green-500/20">
                                                    <span className="w-1 h-1 rounded-full bg-current animate-pulse" /> Spotify
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-base font-bold text-foreground leading-tight mb-0.5 truncate max-w-[180px] md:max-w-[300px]">
                                            {spotify?.active ? spotify.song : "System Muted"}
                                        </h3>
                                        <p className="text-[12px] text-muted-foreground font-medium flex items-center gap-2">
                                            {spotify?.active ? `by ${spotify.artist}` : "Currently analyzing silence."}
                                        </p>
                                    </div>
                                </div>

                                {/* Equalizer UI */}
                                <div className="flex gap-[3px] items-end h-8 pr-4">
                                    {spotify?.active ? (
                                        [1, 2, 3, 4, 5, 2, 4].map((v, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [`${v * 10}%`, `${v * 20}%`, `${v * 5}%`, `${v * 20}%`, `${v * 10}%`] }}
                                                transition={{ repeat: Infinity, duration: 1 + (i * 0.1), ease: "linear" }}
                                                className="w-[4px] bg-primary group-hover:shadow-[0_0_10px_rgba(30,144,255,0.5)] rounded-full transition-all"
                                            />
                                        ))
                                    ) : (
                                        <div className="w-20 h-[1px] bg-border relative overflow-hidden">
                                            <motion.div
                                                animate={{ x: [-100, 100] }}
                                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                className="absolute inset-0 w-[30%] bg-primary/20 bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_10px_primary]"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
