<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { OneListProps } from "../types";
import { MaterialImage, MaterialThumbnail } from "../../helpers";

/**
 * One-Line-List 
 * Lists are continuous, vertical indexes of text and images
 * @params {string} optional `headline` - The main headline text for the list item.
 * @params {string} optional `trailingSupportingText` - Additional text displayed after the main content.
 * @params {string} optional `leadingIcon` - The icon displayed at the beginning of the list item.
 * @params {string} optional `trailingIcon` - The icon displayed at the end of the list item.
 * @params {string} optional `leadingAvatarLabel` - A label for the leading avatar, if used.
 * @params {React.ReactNode} optional `children` - The content of the list item, such as text or components.
 * @params {React.ReactNode} optional `divider` - A component used to visually separate list items.
 * @params {boolean} optional `disable` - If `true`, disables interaction with the list item.
 * @params {function} `onClickCallback` - An action does after a click.
 */

const OneLineList = <T,>(props: OneListProps<T>) => {
=======
import React, { ReactElement, useEffect, useState } from "react";
import ListProps from "../types";
import { MaterialImage, MaterialThumbnail } from "../../helpers";


export default function OneLineList(props: ListProps) {
>>>>>>> c8f5e87 (Added `One-line-list` to Lists)
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [isDragged, setIsDragged] = useState<boolean>(false);
<<<<<<< HEAD
    const [MaterailImageElement, setMaterailImageElement] = useState<React.ReactNode>(null);
    const [MaterailThumbnailElement, setMaterailThumbnailElement] = useState<React.ReactNode>(null);
    const [SlotStart, setSlotStart] = useState<React.ReactNode>(null);
    const [SlotEnd, setSlotEnd] = useState<React.ReactNode>(null);
=======

    let MaterailImageElement,
        MaterailThumbnailElement,
        SlotStart,
        SlotEnd;
>>>>>>> c8f5e87 (Added `One-line-list` to Lists)

    useEffect(() => {
        const childrenArray = React.Children.toArray(props.children);

        childrenArray.forEach((child) => {
            if (React.isValidElement(child)) {
<<<<<<< HEAD
                if (React.isValidElement(child) && child.type === MaterialImage) {
                    setMaterailImageElement(child);
                } else if (React.isValidElement(child) && child.type === MaterialThumbnail) {
                    setMaterailThumbnailElement(child);
                } else if (React.isValidElement(child) && child.props.slot === 'start') {
                    setSlotStart(child);
                } else if (React.isValidElement(child) && child.props.slot === 'end') {
                    setSlotEnd(child);
=======
                if (child.type === MaterialImage) {
                    MaterailImageElement = child;
                } else if (child.type === MaterialThumbnail) {
                    MaterailThumbnailElement = child;
                } else if (child.props.slot === 'start') {
                    SlotStart = child;
                } else if (child.props.slot === 'end') {
                    SlotEnd = child;
>>>>>>> c8f5e87 (Added `One-line-list` to Lists)
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
<<<<<<< HEAD

        const params = {} as T;
        props.onClickCallback(params);
=======
>>>>>>> c8f5e87 (Added `One-line-list` to Lists)
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
<<<<<<< HEAD
                width: '100%',
=======
                width: '100vw',
>>>>>>> c8f5e87 (Added `One-line-list` to Lists)
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
