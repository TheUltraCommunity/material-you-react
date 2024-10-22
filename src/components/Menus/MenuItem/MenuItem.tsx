import React, { useState, useEffect, useRef } from "react";

type MenuItemProps = {
    leadingIcon?: string;
    trailingIcon?: string;
    trailingText?: string;
    label: string;
    disable?: boolean;
    children?: React.ReactNode
};

export default function MenuItem(props: MenuItemProps) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState(false);
    const menuItemRef = useRef<HTMLDivElement>(null);

    // Defines where to position the child Menus of Menu-Item.
    const [childPosition, setChildPosition] = useState<'Right' | 'Left'>('Right');
    const [subChildren, setSubChildren] = useState<React.ReactNode>(null);
    const [showChild, setShowChild] = useState<boolean>(false);

    useEffect(() => {
        if (menuItemRef.current) {
            const rect = menuItemRef.current.getBoundingClientRect();
            const menuLeftPosition = rect.left;
            const menuRightPosition = rect.right;
            setChildPosition(`${menuLeftPosition > menuRightPosition ? 'Left' : 'Right'}`);
        };

        // Restricting to only display whose Children.type = `Menu`
        const childrenArray = React.Children.toArray(props.children);
        const subChild = childrenArray.forEach((child) => {
            if(React.isValidElement(child)){
                setSubChildren(child);
            }
        })
    }, []);
    return (
        <div
            ref={menuItemRef}
            onMouseEnter={() => {
                setIsHovered(true);
                setShowChild(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                setShowChild(false);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
                width: '100%',
                padding: '8px 12px',
                height: '48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: isFocused
                    ? 'rgb(var(--md-sys-color-secondary))'
                    : isHovered
                        ? 'rgba(var(--md-sys-color-on-surface), 8%)'
                        : isFocused || isPressed
                            ? 'rgba(var(--md-sys-color-on-surface), 1%)'
                            : 'rgb(var(--md-sys-color-surface-container))',
                cursor: props.disable ? 'not-allowed' : 'pointer',
                pointerEvents: props.disable ? 'none' : 'auto',
                position: 'relative'
            }}
        >
            {/* Start Side */}
            <div
                style={{
                    gap: '12px',
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                }}
            >

                {/* leading Icon */}
                {
                    props.leadingIcon &&
                    <span
                        className="material-symbols-rounded"
                        style={{
                            fontSize: '24px',
                            color: props.disable
                                ? 'rgb(var(--md-sys-color-on-surface))'
                                : isHovered || isFocused || isPressed
                                    ? 'rgb(var(--md-sys-color-on-surface-variant)'
                                    : 'rgb(var(--md-sys-color-on-surface-variant))',
                            opacity: props.disable ? '0.38' : '',
                        }}
                    >
                        {props.leadingIcon || ''}
                    </span>
                }

                {/* label */}
                <p
                    style={{
                        font: 'var(--md-sys-typescale-label-large-font)',
                        fontWeight: 'var(--md-sys-typescale-label-large-weight)',
                        fontSize: 'var(--md-sys-typescale-label-large-size)',
                        lineHeight: 'var(--md-sys-typescale-label-large-line-height)',
                        letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',
                        color: props.disable || isHovered || isFocused || isPressed ? 'rgb(var(--md-sys-color-on-surface))' : 'rgb(var(--md-sys-color-on-surface))',
                        opacity: props.disable ? '0.38' : '',
                    }}
                >
                    {props.label}
                </p>

            </div>

            {/* End Side */}
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* Trailing Icon */}
                {
                    props.trailingIcon &&
                    <span
                        className="material-symbols-rounded"
                        style={{
                            fontSize: '24px',
                            color: props.disable
                                ? 'rgb(var(--md-sys-color-on-surface))'
                                : isHovered || isFocused || isPressed
                                    ? 'rgb(var(--md-sys-color-on-surface-variant)'
                                    : 'rgb(var(--md-sys-color-on-surface-variant))',
                            opacity: props.disable ? '0.38' : '',
                        }}
                    >
                        {subChildren ? 'arrow_drop_down' :  props.trailingIcon || ''}
                    </span>
                }

                {/* Trailing Text */}
                {/* {
                props.trailingText && 
                    <span
                        style={{
                            font: 'var(--md-sys-typescale-label-large-font)',
                            fontWeight: 'var(--md-sys-typescale-label-large-weight)',
                            fontSize: 'var(--md-sys-typescale-label-large-size)',
                            lineHeight: 'var(--md-sys-typescale-label-large-line-height)',
                            letterSpacing: 'var(--md-sys-typescale-label-large-tracking)',                            
                            float: 'right',
                            backgroundColor: 'rgb(var(--md-sys-color-on-surface-variant))',
                        }}
                    >
                        {props.trailingText || ''}
                    </span>
                } */}
            </div>

            {/*  Sub-Children */}
            {
                showChild &&
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: childPosition === 'Right' ? '100%' : '',
                        left: childPosition === 'Left' ? '100%' : '',
                    }}
                >
                    {
                        subChildren && subChildren
                    }
                </div> 
            }

        </div>
    );
};

