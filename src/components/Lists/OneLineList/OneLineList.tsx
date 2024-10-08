import React, { ReactElement, useEffect, useState } from "react";
import ListProps from "../types";
import { MaterialImage, MaterialThumbnail } from "../../helpers";


export default function OneLineList(props: ListProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [isDragged, setIsDragged] = useState<boolean>(false);

    let MaterailImageElement,
        MaterailThumbnailElement,
        SlotStart,
        SlotEnd;

    useEffect(() => {
        const childrenArray = React.Children.toArray(props.children);

        childrenArray.forEach((child) => {
            if (React.isValidElement(child)) {
                if (child.type === MaterialImage) {
                    MaterailImageElement = child;
                } else if (child.type === MaterialThumbnail) {
                    MaterailThumbnailElement = child;
                } else if (child.props.slot === 'start') {
                    SlotStart = child;
                } else if (child.props.slot === 'end') {
                    SlotEnd = child;
                }
            }
        });
    }, [props.children]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const ripple = event.currentTarget;
        ripple.classList.add('active');

        setTimeout(() => {
            ripple.classList.remove('active');
            setIsPressed(false);
        },600);
    };


    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseMove={() => setIsDragged(true)}
            onClick={(e) => {
                setIsPressed(true);
                handleClick(e);
            }}
            className={`ripple-tabs ${isPressed ? 'active' : ''}`}
            style={{
                width: '100vw',
                height: '56px',
                backgroundColor: isHovered ? 'rgba(var(--md-sys-color-on-surface), 8%)' : isFocused ? 'rgba(var(--md-sys-color-surface), 1%)' : 'rgb(var(--md-sys-color-surface))',
                opacity: props.disable ? '0.1' : '',
                padding: `${!MaterailThumbnailElement ? '8px 16px' : '12px 16px 12px 0px'}`,
                borderRadius: 'var(--md-sys-shape-corner-none)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                cursor: 'pointer',
                boxShadow: isDragged ? 'var(--md-sys-elevation-level4)' : ''
            }}
        >
            {/* Start Side */}
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '16px'
                }}
            >
                {/* Leading Avatar */}
                {
                    props.leadingAvatarLabel && <div
                        style={{
                            background: 'rgb(var(--md-sys-color-primary-container))',
                            borderRadius: '100%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <p
                            style={{
                                color: 'rgb(var(--md-sys-color-on-primary-container))',
                                font: 'var(--md-sys-typescale-title-medium-font)',
                                lineHeight: 'ver(--md-sys-typescale-title-medium-line-height)',
                                fontSize: '16px',
                                letterSpacing: 'var(--md-sys-typescale-title-medium-tracking)',
                                fontWeight: 'var(--md-sys-typescale-title-medium-weight)',

                            }}
                        >
                            {props.leadingAvatarLabel.length > 1 ? props.leadingAvatarLabel[0] : props.leadingAvatarLabel}
                        </p>
                    </div>
                }

                {/* leading Icon */}
                {
                    props.leadingIcon && <span
                        style={{
                            width: '24px',
                            height: '24px',
                            color: props.disable ? 'rgba(var(--md-sys-color-on-surface), 0.38)' : 'rgb(var(--md-sys-color-on-surface-variant))'
                        }}
                        className="material-symbols-rounded"
                    >
                        {props.leadingIcon}
                    </span>
                }

                {/* LeadingImage */}
                {
                    MaterailImageElement && MaterailImageElement
                }

                {/* Leading Video Thumbnail */}
                {
                    MaterailThumbnailElement && MaterailThumbnailElement
                }

                {/* Slot Start */}
                {
                    SlotStart && SlotStart
                }

                {/* Headline */}
                <p
                    style={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: props.disable ? 'rgba(var(--md-sys-color-on-surface), 0.38)' : 'rgb(var(--md-sys-color-on-surface))',
                        font: 'var(--md-sys-typescale-body-large-font)',
                        lineHeight: 'var(-md-sys-typescale-body-large-line-height)',
                        fontSize: 'var(--md-sys-typescale-body-large-size)',
                        letterSpacing: 'var(--md-sys-typescale-body-large-tracking)',
                        fontWeight: 'var(--md-sys-typescale-body-large-weight)',
                    }}
                >
                    {props.headline}
                </p>
            </div>

            {/* End-side */}
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '16px'
                }}
            >
                {/* Trailing Icon */}
                {
                    props.trailingIcon && <span
                        style={{
                            width: '24px',
                            height: '24px',
                            color: props.disable ? 'rgba(var(--md-sys-color-on-surface), 0.38)' : 'rgb(var(--md-sys-color-on-surface-variant))',
                            cursor: 'pointer'
                        }}
                        className="material-symbols-rounded"
                    >
                        {props.trailingIcon}
                    </span>
                }

                {/* Slot end Children */}
                {
                    SlotEnd && SlotEnd
                }

                {/* Trailing Supporting Text */}
                {
                    props.trailingSupportingText && <p
                        style={{
                            color: 'rgb(var(--md-sys-color-on-surface-variant))',
                            font: 'var(--md-sys-typescale-label-small-font)',
                            lineHeight: 'var(--md-sys-typescale-label-small-line-height)',
                            fontSize: 'var(--md-sys-typescale-label-small-size)',
                            letterSpacing: 'var(--md-sys-typescale-label-small-tracking)',
                            fontWeight: 'var(--md-sys-typescale-label-small-weight)',
                        }}
                    >
                        {props.trailingSupportingText}
                    </p>
                }
            </div>
        </div>
    );
};
