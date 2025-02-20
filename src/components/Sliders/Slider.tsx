import React, { useState, useRef, useEffect } from "react";

export default function Slider() {
    const [value, setValue] = useState<number>(40); // Value Percentage
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);


    useEffect(() => {
        console.log("value precentage : ", value);
    }, [value]);


    const handleMouseDown = (e: any) => {
        setIsDragging(true);
    }

    const handleMouseUp = (e: any) => {
        setIsDragging(false);
    }

    const handleMouseMove = (e: any) => {
        if (isDragging) {
            const container = containerRef.current;
            if (container) {
                const containerRect = container.getBoundingClientRect();
                const x = e.clientX - containerRect.left;
                const pxInPercentage = (x * 100) / containerRect.width;
                const clampedValue = Math.round(Math.max(0, Math.min(100, pxInPercentage)));
                setValue(clampedValue);
            }
        }
    };

    return (
        // Parent Container
        <div
            style={{
                width: "400px",
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: isDragging ? "ew-resize" : "default",
            }}
            ref={containerRef}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >

            {/* Active Track 🟩 */}
            <div
                style={{
                    width: `${value}%`,
                    height: "16px",
                    background: "#65558F",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "2px",
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "2px",
                    position: "relative",
                    marginRight: "6px"
                }}
            >
                {/* Start Indicator */}
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        background: "#65558F",
                        position: "absolute",
                        borderRadius: "100%",
                        left: 6,
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: value == 0 ? 0 : 1
                    }}
                >
                </div>
            </div>

            {/* Handle */}
            <div
                style={{
                    width: "4px",
                    height: "44px",
                    background: "transparent",
                    borderRadius: "2px",
                    cursor: "ew-resize",
                    position: "relative"    
                }}
                onMouseDown={handleMouseDown}
            >
                <div
                    style={{
                        width: "4px",
                        height: "44px",
                        background: "#65558F",
                        borderRadius: "20px",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                >
                </div>
            </div>

            {/* Inactive Track 🔴 */}
            <div
                style={{
                    flex: 1,
                    height: "16px",
                    background: "rgb(var(--md-sys-color-on-surface-variant))",
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "2px",
                    borderBottomRightRadius: "16px",
                    borderBottomLeftRadius: "2px",
                    position: "relative",
                    marginLeft: "6px"
                }}
            >
                {/* End Indicator */}
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        background: "#65558F",
                        position: "absolute",
                        borderRadius: "100%",
                        right: 6,
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: value == 100 ? 0 : 1
                    }}
                >
                </div>
            </div>
        </div>
    );
};
