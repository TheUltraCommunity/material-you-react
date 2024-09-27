import React from "react";

type TopAppBarCenterLargeProps = {
    containerBackgroundColor?: string;
    headline: string;
    leadingIcon?: string;
    trailingIcons?: string[];
}

export default function TopAppBarCenterLarge(props: TopAppBarCenterLargeProps) {
    return (
        <div
            style={{
                backgroundColor: `${props.containerBackgroundColor ?? "rgb(var(--md-sys-color-surface-container))"}`,
                width: '100vw',
                height: '152px',
                borderRadius: '0px',
                padding: '20px 16px 28px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: '24px',
                position: 'sticky',
                top: '0',
                left: '0'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    gap: '16px'
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
                        {props.leadingIcon || 'arrow_back'}
                    </span>
                </div>

                {/* Headline */}
                <p
                    style={{
                        fontFamily:  'var(--md-sys-typescale-headline-large-font-style)',
                        fontWeight: 'var(--md-sys-typescale-headline-large-weight)',
                        fontSize: 'var(--md-sys-typescale-headline-large-size)',
                        lineHeight: 'var(--md-sys-typescale-headline-large-line-height)',
                        letterSpacing: 'var(--md-sys-typescale-headline-large-tracking)',
                        backgroundColor: 'rgb(var(--md-sys-color-on-surface: 29, 27, 32))'
                    }}
                >
                    {props.headline}
                </p>
            </div>
                
            {/* Trailing Icons */}
            {props.trailingIcons && (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '24px'
                    }}
                >
                    {props.trailingIcons.map((icon, index) => (
                        <div key={index}
                            style={{
                                width: '24px',
                                height: '24px',
                                color: 'rgb(var(--md-sys-color-on-surface-variant))',
                                cursor: 'pointer'
                            }}
                        >
                            <span className="material-symbols-rounded">
                                {icon}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
