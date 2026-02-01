'use client'

import { catconfig } from '@/config/Catconfig'
import Script from 'next/script'
import { useEffect } from 'react'

const Oneko = () => {

    if (!catconfig.enabled) {
        return null
    }

    useEffect(() => {
        // The script should auto-execute, but ensure it runs
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined' && window.oneko) {
                window.oneko();
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Script
            src='/Oneko/oneko.js'
            data-cat="/Oneko/oneko.gif"
            strategy="afterInteractive"
        />
    )
}

export default Oneko