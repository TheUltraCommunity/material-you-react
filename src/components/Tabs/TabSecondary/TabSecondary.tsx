import React, { useEffect, useState } from "react";
import { SecondaryProps } from "../types";
import { Badge } from "../../Badges";
import { useTabContext } from "../TabContext";

/**
 * A Tab Component used for moving from one page to another.
 *
 * @param {string} `label` - A label that will be shown.
 * @param {boolean} `active` - A Default selected Tab.
 * @param {string} `badge` - A string that represents a no.of notifications.
 * @param {string} `icon` - The material icon name to display next to the action. Optional.
 * @params {() => void} `onClickCallback`   : A callback function hits when user Clicks.
 */

const TabSecondary = <T,>(props: SecondaryProps<T>) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isPressed, setIsPressed] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const { activeTabId, setActiveTabId } = useTabContext();

    useEffect(() => {
        setIsActive(activeTabId === props.label ? true : false);
    }, [activeTabId]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const ripple = event.currentTarget;
        ripple.classList.add('active');

        setTimeout(() => {
            ripple.classList.remove('active');
            setIsPressed(false);
        }, 500);

        const params = {} as T;
        props.onClickCallback(params);
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
                setActiveTabId(props.label);
            }}
            className={`ripple ${isPressed ? 'active' : ''}`}
            style={{
                flex: 1,
                width: '100%',
                height: '48px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'center',
                cursor: 'pointer',
                position: 'sticky'
            }}
        >
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <span
                    className="material-symbols-rounded"
                    style={{
                        width: '24px',
                        height: '24px',
                        marginRight: '8px',
                        color:
                            isHovered && isActive
                                ? 'rgb(var(--md-sys-color-primary))'
                                : isHovered && !isActive
                                    ? 'rgb(var(--md-sys-color-on-surface))'
                                    : isActive
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
                            isHovered && isActive
                                ? 'rgb(var(--md-sys-color-primary))'
                                : isHovered && !isActive
                                    ? 'rgb(var(--md-sys-color-on-surface))'
                                    : isActive
                                        ? 'rgb(var(--md-sys-color-primary))'
                                        : isPressed
                                            ? 'rgb(var(--md-sys-color-on-surface))'
                                            : 'rgb(var(--md-sys-color-on-surface-variant))',
                        textAlign: 'center',
                        marginRight: props.badge ? '4px' : '',
                    }}
                >
                    {props.label}
                </p>

                {
                    props.badge && <Badge content={props.badge} disableAlign={true} />
                }
            </div>
            <div
                style={{
                    alignSelf: 'flex-end',
                    width: '100%',
                    height: isActive ? '2px' : '0px',
                    background: 'rgb(var(--md-sys-color-primary))',
                }}
            />
        </div>
    );
};
