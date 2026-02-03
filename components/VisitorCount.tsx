// components/VisitorCounter.jsx (Tailwind CSS version)
// Use this if your portfolio uses Tailwind CSS

import { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchVisitorCount();
    }, []);

    const fetchVisitorCount = async () => {
        try {
            const response = await fetch('/api/visitors');
            const data = await response.json();

            if (data.success) {
                setVisitorCount(data.count);
            } else {
                setError(true);
            }
        } catch (err) {
            console.error('Error fetching visitor count:', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };

    const formatNumber = (num) => {
        return num.toLocaleString();
    };

    if (error) {
        return null;
    }

    return (
        <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-3 rounded-xl shadow-sm">
            <svg
                className="w-6 h-6 text-gray-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
            </svg>

            <span className={`text-gray-700 ${loading ? 'animate-pulse' : ''}`}>
                {loading ? (
                    'Loading visitors...'
                ) : (
                    <>
                        You are the{' '}
                        <span className="font-semibold text-gray-900">
                            {formatNumber(visitorCount)}
                            <sup className="text-xs">{getOrdinal(visitorCount)}</sup>
                        </span>{' '}
                        visitor
                    </>
                )}
            </span>
        </div>
    );
};

export default VisitorCounter;