import React, { useState, useRef, useEffect } from "react";

interface SliderProps {
    onChange: (value: number) => void;
}

export default function Slider(props: SliderProps) {
    const [value, setValue] = useState<number>(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);


    useEffect(() => {
        if (props.onChange) props.onChange(value);
    }, [value]);

    const handleMouseDown = (e: any) => {
        setIsDragging(true);
    }

    // Call: when users stops holding handler
    const handleMouseUp = (e: any) => {
        setIsDragging(false);
    }

    // Call: when handle drags back and forth
    const handleMouseMove = (e: any) => {
        if (isDragging) {
            updateSliderValueOnPosition(e, 0);
        }
    };

    // Updates Handler value based on current drag | jump event
    const updateSliderValueOnPosition = (e: any, extraCover: number) => {
        const container = containerRef.current;
        if (container) {
            const containerRect = container.getBoundingClientRect();
            const x = e.clientX - containerRect.left;
            const pxInPercentage = (x * 100) / (containerRect.width + extraCover);
            const clampedValue = Math.round(Math.max(0, Math.min(100, pxInPercentage)));
            setValue(clampedValue);
            if (clampedValue === 0 || clampedValue === 100) handleMouseUp(e); // temporary fix ⚠️
        }
    }

    // Call: When user directly clicks randomly on active or inactive track
    // without using handler
    // update `value` based on positon of click
    const handleMouseJump = (e: any) => {
        updateSliderValueOnPosition(e, 8); // 8 = 6 ( margin + handler width)
    }

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
                    borderTopRightRadius: "4px",
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "4px",
                    position: "relative",
                    boxShadow: "var(--md-sys-elevation-level0)",
                    cursor: isDragging ? "ew-resize" : "pointer",
                    transition: isDragging ? "none" : "width 0.3s ease-out"
                }}
                onClick={handleMouseJump}
            >
                {/* Start Indicator */}
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        background: "#65558F",
                        position: "absolute",
                        borderRadius: "100%",
                        left: 4,
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
                    width: isDragging ? "2px" : "4px",
                    height: "44px",
                    background: "rgb(var(--md-sys-color-primary))",
                    borderRadius: "2px",
                    cursor: "ew-resize",
                    position: "relative",
                    boxShadow: "var(--md-sys-elevation-level0)",
                    zIndex: 10,
                    margin: "0px 6px",
                    transition: isDragging ? "none" : "width 0.3s ease-out"
                }}
                onMouseDown={handleMouseDown}
            >
                {/* Value Representer */}
                <div
                    style={{
                        minWidth: "48px",
                        minHeight: "44px",
                        background: "rgb(var(--md-sys-color-inverse-surface))",
                        padding: "12px 16px",
                        borderRadius: "100px",
                        gap: "8px",
                        position: "absolute",
                        top: "-50px",
                        left: "50%",
                        transform: `translateX(-50%) translateY(${isDragging ? "0px" : "10px"})`,
                        font: "var(--md-sys-typescale-label-medium-font)",
                        fontSize: "var(--md-sys-typescale-label-large-size)",
                        fontWeight: "var(--md-sys-typescale-label-medium-weight)",
                        lineHeight: "var(--md-sys-typescale-label-large-line-height)",
                        letterSpacing: "var(--md-sys-typescale-label-large-tracking)",
                        color: "rgb(var(--md-sys-color-inverse-on-surface))",
                        textAlign: "center",
                        zIndex: 10,
                        userSelect: "none",
                        opacity: isDragging ? 1 : 0,
                        transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
                    }}
                >
                    {value}
                </div>
            </div>

            {/* Inactive Track 🔴 */}
            <div
                style={{
                    flex: 1,
                    height: "16px",
                    background: "rgb(var(--md-sys-color-secondary-container))",
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "4px",
                    borderBottomRightRadius: "16px",
                    borderBottomLeftRadius: "4px",
                    position: "relative",
                    // marginLeft: "6px",
                    boxShadow: "var(--md-sys-elevation-level0)",
                    cursor: isDragging ? "ew-resize" : "pointer",
                    transition: isDragging ? "none" : "width 0.3s ease-out"
                }}
                onClick={handleMouseJump}
            >
                {/* End Indicator */}
                <div
                    style={{
                        width: "4px",
                        height: "4px",
                        background: "#65558F",
                        position: "absolute",
                        borderRadius: "100%",
                        right: 4,
                        top: "50%",
                        transform: "translateY(-50%)",
                        opacity: value == 100 ? 0 : 1,
                    }}
                >
                </div>
            </div>
        </div>
    );
};
