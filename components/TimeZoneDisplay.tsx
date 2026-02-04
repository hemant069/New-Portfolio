"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function TimeZoneDisplay() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState("");
    const [timezone, setTimezone] = useState("");

    useEffect(() => {
        setMounted(true);

        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);

            // Get timezone info
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const offset = now.getTimezoneOffset();
            const offsetHours = Math.abs(Math.floor(offset / 60));
            const offsetSign = offset <= 0 ? "+" : "-";
            const gmtOffset = `GMT${offsetSign}${offsetHours}`;
            const cityName = tz.split("/").pop()?.replace("_", " ") || tz;
            setTimezone(`${cityName} (${gmtOffset})`);
        };

        updateTime();
        // Update every minute instead of every second to avoid glitching
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50">
                <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-sm font-mono text-muted-foreground">--:--</span>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/30">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-sm font-mono tabular-nums text-foreground font-medium">
                {time}
            </span>
            <span className="text-xs text-muted-foreground hidden sm:inline">
                • {timezone}
            </span>
        </div>
    );
}
