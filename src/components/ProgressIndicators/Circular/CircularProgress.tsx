import React, { useEffect, useState } from "react";

interface CircularProgressProps {
    percentage?: number;
    indeterminate?: boolean;
}

/**
 * @description A Circular Progress Indicator Component - shows the status of a process in real time, for better UI experience.
 * @params percentage: number (optional) - Percentage determines how much does progress done.
 * @params indeterminate: boolean (optional) - Indeterminate for an unspecified amount of progress.
*/

export default function CircularProgress(props: CircularProgressProps) {

    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        if (props.percentage !== undefined) {
            setProgress(props.percentage);
            return;
        }
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            })
        }, 200);

        return () => clearInterval(interval);
    }, [props.percentage]);
    const size = 48; // SVG size
    const strokeWidthBg = 4; // Background stroke width
    const strokeWidthProgress = 4; // Progress stroke width
    const radius = (size - strokeWidthBg) / 2; // Adjusted radius for spacing
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <>
            {
                props.indeterminate ? <div className="loader"></div> 
                    : 
                        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
                        style={{
                            opacity: progress === 100 ? 0 : 1,
                            transition: "all 1s ease-out"
                        }}
                    >
                        {/* Background Circle */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            stroke="#E8DEF8"
                            strokeWidth={strokeWidthBg}
                            fill="none"
                        />
                        {/* Progress Indicator */}
                        <circle
                            style={{
                                transition: "all 0.2s ease-out"
                            }}
                            cx={size / 2}
                            cy={size / 2}
                            stroke="#65558F"
                            r={radius}
                            strokeWidth={strokeWidthProgress}
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start from top
                        // strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`} // Creates the gap
                        />
                    </svg>
            }
        </>
    );
};
