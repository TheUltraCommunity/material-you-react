import React, { useEffect, useState } from "react";

interface LinearProgressProps {
    percentage?: number;
}

/**
 * @description A Divider Component - shows the status of a process in real time
 * @params percentage: number (optional)
*/

export default function LinearProgress(props: LinearProgressProps) {
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

    return (
        // Parent Container
        <div
            style={{
                minWidth: "100%",
                height: "4px",
                minHeight: "4px",
                maxHeight: "4px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: progress === 100 ? "0px" : "4px",
                opacity: progress === 100 ? 0 : 1,
                transition: "all 2s ease-out"
            }}
        >
            {/* Active Indicator */}
            <div
                style={{
                    width: `${progress}%`,
                    height: "4px",
                    borderRadius: "8px",
                    background: "#65558F",
                    transition: "all 0.3s ease-out"
                }}
            >
            </div>

            {/* Track */}
            <div
                style={{
                    flex: 1,
                    minWidth: "4px",
                    height: "4px",
                    borderRadius: "8px",
                    background: "#E8DEF8",
                    position: "relative"
                }}
            >

                {/* Stop Indicator */}
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "100%",
                        position: "absolute",
                        background: "#65558F",
                        right: "0px"
                    }}
                >
                </div>
            </div>
        </div>
    );
};
