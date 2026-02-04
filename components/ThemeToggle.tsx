"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-lg bg-secondary/50 animate-pulse" />
        );
    }

    const themes = [
        { value: "system", icon: Monitor, label: "System" },
        { value: "light", icon: Sun, label: "Light" },
        { value: "dark", icon: Moon, label: "Dark" },
    ];

    const currentIndex = themes.findIndex((t) => t.value === theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    const CurrentIcon = themes[currentIndex]?.icon || Monitor;

    return (
        <motion.button
            onClick={() => setTheme(nextTheme.value)}
            className="relative flex items-center justify-center w-9 h-9 rounded-lg 
                 bg-secondary/50 hover:bg-secondary/80 
                 border border-border/50 hover:border-border 
                 transition-colors duration-200
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Switch to ${nextTheme.label} theme`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                >
                    <CurrentIcon className="w-4 h-4 text-foreground" />
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
}
