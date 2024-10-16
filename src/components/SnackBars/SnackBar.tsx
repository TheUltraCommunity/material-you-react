import React, { useEffect, useState } from "react";
import { TextButton } from "../Buttons";

type BaseSnackBarProps = {
  supportingText: string;
  action?: string;
  actionCallback?: (...args: any[]) => any;
  icon?: string;
  duration?: number;
  offset?: string;
  enterTransition?: "slide" | "grow";
  align?: "start" | "center";
};

type SnackBarProps =
  | (Omit<BaseSnackBarProps, "longerAction"> & { variant: "singleLine" })
  | (BaseSnackBarProps & { variant: "twoLine" });

/**
 * A component for displaying brief messages to users, with optional actions.
 * The SnackBar component supports single-line and two-line variants.
 *
 * @param {string} `supportingText` - The main message text displayed inside the SnackBar.
 * @param {string} `action` - The label for the action button. Optional.
 * @param {Function} `actionCallback` - A callback function executed when the action button is clicked. Optional.
 * @param {string} `icon` - The material icon name to display next to the action. Optional.
 * @param {number} [duration=5] - The duration (in seconds) for which the SnackBar is visible. Defaults to 5 seconds.
 * @param {'singleLine' | 'twoLine'} `variant` - The layout variant of the SnackBar: either single-line or two-line.
 */

export default function SnackBar(props: SnackBarProps) {
  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleActionCallback();
      setTimeout(() => setShouldRender(false), 300);
    }, (props.duration || 5) * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleActionCallback = () => {
    if (props.actionCallback) {
      props.actionCallback();

      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 300);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`md-elevation-2 ${
        props.enterTransition === "slide"
          ? "animate-transition-grow"
          : "animate-transition-bottom"
      }`}
      style={{
        width: "max-content",
        maxWidth: "80vw",
        height: props.variant === "singleLine" ? "48px" : "68px",
        padding: "0px 16px",
        display: "flex",
        whiteSpace: "pre-wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        backgroundColor: "rgb(var(--md-sys-color-inverse-surface))",
        borderRadius: "var(--md-sys-shape-corner-extra-small-default-size)",
        lineHeight: "48px",
        position: "fixed",
        // bottom: `${bottomOffset}px`,
        bottom: props.offset ?? "16px",
        left: props.align === "start" ? 16 : 0,
        marginLeft: "auto",
        marginRight: "auto",
        right: props.align === "start" ? "" : 0,
        zIndex: 10,
      }}
    >
      <p
        style={{
          color: "rgb(var(--md-sys-color-inverse-on-surface))",
          font: "var(--md-sys-typescale-body-medium-font)",
          lineHeight: "var(--md-sys-typescale-body-medium-line-height)",
          fontSize: "var(--md-sys-typescale-body-medium-size)",
          letterSpacing: "var(--md-sys-typescale-body-medium-tracking)",
          fontWeight: "var(--md-sys-typescale-body-medium-weight)",
          overflow: "hidden",
          maxWidth: "60ch",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: props.variant === "singleLine" ? 1 : 2,
          maxLines: 2,
        }}
      >
        {props.supportingText}
      </p>
      {(props.action || props.icon) && (
        <div
          style={{
            display: props.variant === "twoLine" ? "flex" : "",
            height: props.variant === "twoLine" ? "100%" : "",
            justifyContent: props.variant === "twoLine" ? "flex-end" : "",
            alignItems: props.variant === "twoLine" ? "self-end" : "",
          }}
        >
          <div
            style={{
              width: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: props.action && props.icon ? "16px" : "",
            }}
          >
            {props.action && (
              <TextButton
                contentColor="rgb(var(--md-sys-color-inverse-primary))"
                onClickCallback={handleActionCallback} // A callback function
              >
                <p>{props.action}</p>
              </TextButton>
            )}
            {props.action && (
              <span
                className="material-symbols-rounded"
                style={{
                  color: "rgb(var(--md-sys-color-inverse-on-surface))",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                {props.icon}
              </span>
            )}
          </div>
        </div>
      )}

      {/* State Layer */}
      {/* {
                    isHovered && <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(var(--md-sys-color-inverse-primary), 8%)',
                        }}
                    >
                    </div>
        } */}
    </div>
  );
}
