import React, { useState } from "react";
import { PrimaryProps } from "../types";
import Badge from "../Badge";

export default function TabPrimary(props: PrimaryProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return(
        <div
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
                width: 'fit-content',
                height: '64px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                placeContent: 'end',
                gap: '5px',
                cursor: 'pointer',
            }}
        >
            <span
                className="material-symbols-rounded"
                style={{
                    width: '24px',
                    height: '24px',
                    margin: '0px auto',
                    color: props.active ? 'rgb(var(--md-sys-color-primary))' : 'rgb(var(--md-sys-color-on-surface-variant))',  
                    position: 'relative',
                }}
                >   
                    {props.icon}
                <Badge num={props.badge}/>
                </span>

            <p
                style={{
                    font: 'var(--md-sys-typescale-title-small-font)',
                    lineHeight: 'var(--md-sys-typescale-title-small-line-height)',
                    fontSize: 'var(--md-sys-typescale-title-small-size-value)',
                    fontWeight: 'var(--md-sys-typescale-title-small-weight)',
                    letterSpacing: 'var(--md-sys-typescale-title-small-tracking)',
                    color: props.active ? 'rgb(var(--md-sys-color-primary))' : 'rgb(var(--md-sys-color-on-surface-variant))',
                    textAlign: 'center'
                }}
            >
                {props.label}
            </p>

            <div 
                style={{
                    height: props.active ? '3px' : '0px',
                    background : 'rgb(var(--md-sys-color-primary))',
                    borderRadius: '3px 3px 0 0'
                }}
            />
        </div>
    );
};
