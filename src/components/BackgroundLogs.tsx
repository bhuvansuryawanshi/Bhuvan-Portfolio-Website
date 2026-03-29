import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOG_MESSAGES = [
    "[INFO] Initializing AWS cloud infrastructure...",
    "[SUCCESS] VPC created: vpc-0a1b2c3d",
    "[INFO] Provisioning EC2 instances in us-east-1...",
    "[BUILD] Running docker-compose up --build",
    "[DEPLOY] Pushing container to Amazon ECR...",
    "[SUCCESS] Service deployed at: internal-alb-1234.us-east-1.elb.amazonaws.com",
    "[INFO] Monitoring health check status...",
    "[HEALTH] All nodes healthy. Traffic routing enabled.",
    "[INFO] terraform apply -auto-approve",
    "[SUCCESS] Infrastructure state synchronized.",
    "[INFO] kubectl get pods -n production",
    "[STAGING] Pod 'backend-6d8f' status: Running",
    "[INFO] Github Action: CI Pipeline started.",
    "[TEST] Unit tests passed. (124/124)",
    "system status: available",
    "analyzing traffic patterns...",
    "scaling production cluster...",
    "applying security patches to nodes...",
    "snapshotting rds instances...",
    "[DNS] Route53 health checks passing.",
    "[SEC] WAF rules active: 0 malicious requests blocked.",
    "[IAM] Role assumed for: ec2-read-only-access",
];

const BackgroundLogs = () => {
    const [logs, setLogs] = useState<{ id: number; text: string; left: string; startY: string; duration: number }[]>([]);
    
    useEffect(() => {
        let counter = 0;
        
        // Populate full screen immediately with no delay
        const initialLogs = Array.from({ length: 30 }).map((_, i) => ({
            id: ++counter,
            text: LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)],
            left: `${Math.random() * 90 + 5}%`,
            startY: `${Math.random() * 100}vh`, // Each starts at a random height
            duration: Math.random() * 15 + 15,
        }));
        setLogs(initialLogs);

        // Constant trickle starting from bottom
        const interval = setInterval(() => {
            const newLog = {
                id: ++counter,
                text: LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)],
                left: `${Math.random() * 90 + 5}%`,
                startY: "110vh",
                duration: Math.random() * 12 + 15,
            };
            
            setLogs(prev => [...prev.slice(-45), newLog]);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.05] md:opacity-[0.08]">
            <AnimatePresence>
                {logs.map(log => (
                    <motion.div
                        key={log.id}
                        initial={{ opacity: 0, y: log.startY }}
                        animate={{ 
                            opacity: [0, 1, 1, 0], 
                            y: "-20vh" 
                        }}
                        transition={{ 
                            duration: log.duration, 
                            ease: "linear",
                            times: [0, 0.1, 0.9, 1]
                        }}
                        className="absolute font-mono text-[10px] md:text-[11px] text-primary whitespace-nowrap"
                        style={{ left: log.left }}
                    >
                        {log.text}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default BackgroundLogs;
