import React, { useState } from "react";
import { PrimaryProps } from "../types";

export default function TabPrimary(props: PrimaryProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const ripple = event.currentTarget;
        ripple.classList.add('active');

        setTimeout(() => {
            ripple.classList.remove('active');
            setIsPressed(false);
        }, 500);
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onClick={(e) => {
                setIsPressed(true);
                handleClick(e);
            }}
            className={`ripple ${isPressed ? 'active' : ''}`}
            style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
            }}
        >
            <div
                style={{
                    width: 'fit-content',
                    height: '64px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    placeContent: 'end',
                    gap: '5px',
                }}
            >
                <span
                    className="material-symbols-rounded"
                    style={{
                        width: '24px',
                        height: '24px',
                        margin: '0px auto',
                        color:
                            isHovered && props.active
                                ? 'rgb(var(--md-sys-color-primary))'
                                : isHovered && !props.active
                                    ? 'rgb(var(--md-sys-color-on-surface))'
                                    : props.active
                                        ? 'rgb(var(--md-sys-color-primary))'
                                        : isPressed
                                            ? 'rgb(var(--md-sys-color-on-surface))'
                                            : 'rgb(var(--md-sys-color-on-surface-variant))',
                    }}
                >
                    {props.icon}
                </span>

                <p
                    style={{
                        font: 'var(--md-sys-typescale-title-small-font)',
                        lineHeight: 'var(--md-sys-typescale-title-small-line-height)',
                        fontSize: 'var(--md-sys-typescale-title-small-size-value)',
                        fontWeight: 'var(--md-sys-typescale-title-small-weight)',
                        letterSpacing: 'var(--md-sys-typescale-title-small-tracking)',
                        color:
                            isHovered && props.active
                                ? 'rgb(var(--md-sys-color-primary))'
                                : isHovered && !props.active
                                    ? 'rgb(var(--md-sys-color-on-surface))'
                                    : props.active
                                        ? 'rgb(var(--md-sys-color-primary))'
                                        : isPressed
                                            ? 'rgb(var(--md-sys-color-on-surface))'
                                            : 'rgb(var(--md-sys-color-on-surface-variant))',
                        textAlign: 'center'
                    }}
                >
                    {props.label}
                </p>

                <div
                    style={{
                        height: props.active ? '3px' : '0px',
                        background: 'rgb(var(--md-sys-color-primary))',
                        borderRadius: '3px 3px 0 0'
                    }}
                />
            </div>
        </div>
    );
};
