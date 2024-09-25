import React from "react";

type TopAppBarCenterSmallProps = {
    containerBackgroundColor?: string;
    headline: string;
    leadingIcon?: string;
    trailingIcons?: string[];
}

export default function TopAppBarCenterSmall(props: TopAppBarCenterSmallProps) {
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
                position: 'fixed',
                top: '0',
                left: '0'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                        fontWeight: 'var(--md-sys-typescale-title-small-weight)',
                        fontSize: 'var(--md-sys-typescale-title-small-size)',
                        lineHeight: 'var(--md-sys-typescale-title-small-line-height)',
                        letterSpacing: 'var(--md-sys-typescale-title-small-tracking)',
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
