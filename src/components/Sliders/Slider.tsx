// TODO: 
// labeling ✅
// leading icon ✅
// add - + icons buttons on left and right of slider
// recheck colors when focused | pressed ✅
// check if colors are properly displaying in light | dark mode ✅
// declare props for above
// disable prop ✅

import React, { useState, useRef, useEffect } from "react";

interface SliderProps {
    onChange: (value: number) => void;
    leadingIcon?: string;
    label?: string;
    disable?: boolean
}

export default function Slider(props: SliderProps) {
    const [value, setValue] = useState<number>(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);


    useEffect(() => {
        if (props.onChange) props.onChange(value);
    }, [value]);

    // Calls: User holds the handler
    const handleMouseDown = (e: any) => {
        setIsDragging(true);
    }

    // Call: when users stops holding handler
    const handleMouseUp = (e: any) => {
        setIsDragging(false);
        handleOnBlur(e);
    }

    // Call: when handle drags back and forth
    const handleMouseMove = (e: any) => {
        if (isDragging) {
            updateSliderValueOnPosition(e, 0);
        }
    };

    // Call: When user directly clicks randomly on active or inactive track
    // without using handler
    // update `value` based on positon of click
    const handleMouseJump = (e: any) => {
        handleOnFocus(e);
        updateSliderValueOnPosition(e, 8); // 8 = 6 ( margin + handler width)
        setTimeout(() => {
            handleOnBlur(e);
        }, 500);
    }

    // Call: When user focus via `TAB`
    const handleOnFocus = (e: any) => {
        console.log("slider is being focused");
        setIsFocused(true);
    }

    // Call: When user lose focus
    const handleOnBlur = (e: any) => {
        console.log("slider lost!! focused");
        setIsFocused(false);
    }

    // Based Key Press [ left | right ] buttons decrease & increase values respectively
    const handleKeyDown = (e: any) => {
        if (e.key === "ArrowLeft" && value - 1 >= 0) setValue((prev) => prev - 1);
        else if (e.key === "ArrowRight" && value + 1 <= 100) setValue((prev) => prev + 1);
        else if (e.key === "Home") setValue((prev) => 0);
        else if (e.key === "End") setValue((prev) => 100);
    }

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


    return (
        // Parent Container
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "12px",
                userSelect: "none",
                pointerEvents: props.disable ? "none" : "auto",
                cursor : props.disable ? "not-allowed" : "default",
            }}
        >

            {/* Leading Icon */}
            {
                props.leadingIcon &&
                <span
                    className="material-symbols-rounded"
                    style={{
                        transform: "translateY(-10px)",
                        color: props.disable ? "rgb(var(--md-sys-color-on-surface))" : "#CCB6FF",
                        opacity: props.disable ? 0.38 : 1,
                    }}
                    >
                    {props.leadingIcon}
                </span>
            }

            {/* Label + Slider */}
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start"
                }}
            >
                {/* Label Text */}
                {
                    props.label &&
                    <p
                        style={{
                            fontWeight: "500",
                            color: props.disable ? "rgb(var(--md-sys-color-on-surface))" : "rgb(var(--md-sys-color-primary))",
                            opacity: props.disable ? 0.38 : 1,
                            fontSize: "12px",
                            letterSpacing: "0.5px"
                        }}
                    >
                        {props.label}
                    </p>
                }

                {/* Slider */}
                <div
                    style={{
                        width: "100%",
                        height: "fit-content",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: props.disable ? "not-allowed" : isDragging ? "ew-resize" : "default",
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
                            background: props.disable ? "rgb(var(--md-sys-color-on-surface))" : "rgb(var(--md-sys-color-primary))",
                            opacity: props.disable ? 0.38 : 1,
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "4px",
                            borderBottomLeftRadius: "16px",
                            borderBottomRightRadius: "4px",
                            position: "relative",
                            boxShadow: "var(--md-sys-elevation-level0)",
                            cursor: props.disable ? "not-allowed" : isDragging ? "ew-resize" : "pointer",
                            transition: isDragging ? "none" : "width 0.3s ease-out"
                        }}
                        onClick={handleMouseJump}
                    >
                        {/* Start Indicator */}
                        <div
                            style={{
                                width: "4px",
                                height: "4px",
                                background:  props.disable ? "rgb(var(--md-sys-color-on-surface))" :  "#65558F",
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
                        tabIndex={0} // Moves focus to the slider handle
                        style={{
                            width: isDragging || isFocused ? "2px" : "4px",
                            height: "44px",
                            background: props.disable ? "rgb(var(--md-sys-color-on-surface))"  : "rgb(var(--md-sys-color-primary))",
                            opacity: props.disable ? 0.38 : 1,
                            outline: "rgb(var(--md-sys-color-on-primary))",
                            borderRadius: "2px",
                            cursor: props.disable ? "not-allowed" : "ew-resize",
                            position: "relative",
                            boxShadow: "var(--md-sys-elevation-level0)",
                            zIndex: 5,
                            margin: "0px 6px",
                            transition: isDragging ? "none" : "width 0.3s ease-out"
                        }}
                        onFocus={handleOnFocus}
                        onBlur={handleOnBlur}
                        onKeyDown={handleKeyDown}
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
                                transform: `translateX(-50%) translateY(${isDragging || isFocused ? "0px" : "10px"})`,
                                font: "var(--md-sys-typescale-label-medium-font)",
                                fontSize: "var(--md-sys-typescale-label-large-size)",
                                fontWeight: "var(--md-sys-typescale-label-medium-weight)",
                                lineHeight: "var(--md-sys-typescale-label-large-line-height)",
                                letterSpacing: "var(--md-sys-typescale-label-large-tracking)",
                                color: "rgb(var(--md-sys-color-inverse-on-surface))",
                                textAlign: "center",
                                zIndex: 10,
                                opacity: isDragging || isFocused ? 1 : 0,
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
                            background: props.disable ? "rgb(var(--md-sys-color-on-surface))" : "rgb(var(--md-sys-color-secondary-container))",
                            opacity: props.disable ? 0.12 : 1,
                            borderTopRightRadius: "16px",
                            borderTopLeftRadius: "4px",
                            borderBottomRightRadius: "16px",
                            borderBottomLeftRadius: "4px",
                            position: "relative",
                            boxShadow: "var(--md-sys-elevation-level0)",
                            cursor: props.disable ? "not-allowed" : isDragging ? "ew-resize" : "pointer",
                            transition: isDragging ? "none" : "width 0.3s ease-out"
                        }}
                        onClick={handleMouseJump}
                    >
                        {/* End Indicator */}
                        <div
                            style={{
                                width: "4px",
                                height: "4px",
                                background: props.disable ? "rgb(var(--md-sys-color-on-surface))" : "rgb(var(--md-sys-color-primary))",
                                position: "absolute",
                                borderRadius: "100%",
                                right: 4,
                                top: "50%",
                                transform: "translateY(-50%)",
                                opacity: props.disable ? 0.38 : value == 100 ? 0 : 1,
                            }}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
