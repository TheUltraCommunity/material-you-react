import React from "react";

type TopAppBarCenterAlignedProps = {
    containerBackgroundColor?: string;
    headline: string;
    leadingIcon?: string;
    trailingIcon?: string;
}

export default function TopAppBarCenterAligned(props: TopAppBarCenterAlignedProps) {
    return (
        <div   
            style={{
                backgroundColor: `${props.containerBackgroundColor ?? "rgb(var(--md-sys-color-surface-container))"}`,
                width: '100vw',
                height: '64px',
                borderRadius: '0px',
                padding: '0px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                position: 'sticky',
                top: '0',
                left: '0'
            }}
        >

            {/* LeadingIcon */}
            <div
                style={{
                    width: '24px',
                    height: '24px',
                    color: 'rgb(var(--md-sys-color-surface))',
                    cursor: 'pointer'
                }}
            >
                <span
                    className="material-symbols-rounded"
                >
                    {props.leadingIcon || 'menu'}
                </span>
            </div>

            {/* Headline */}
            <p
                style={{
                    fontWeight: 'var(--md-sys-typescale-title-large-weight)',
                    fontSize: 'var(--md-sys-typescale-title-large-size)',
                    lineHeight: 'var(--md-sys-typescale-title-large-line-height)',
                    letterSpacing: 'var(--md-sys-typescale-title-large-tracking)',
                    backgroundColor: 'rgb(var(--md-sys-color-on-surface: 29, 27, 32))'

                }}
            >
                {props.headline}
            </p>

            {/* Trailing Icon */}
            <div
                style={{
                    width: '24px',
                    height: '24px',
                    color: 'rgb(var(--md-sys-color-on-surface-variant))',
                    cursor: 'pointer'
                }}
            >
                <span
                    className="material-symbols-rounded"
                >
                    {props.trailingIcon || 'account_circle'}
                </span>
            </div>

        </div>
    );
};
