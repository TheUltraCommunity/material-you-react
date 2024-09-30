import React, { useState } from "react";

type ElevatedButtonProps = {
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  containerColor?: string;
  contentColor?: string;
  width?: string;
};

const ElevatedButton = (props: ElevatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedWithKeyboard, setIsFocusedWithKeyboard] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false);
        setIsFocusedWithKeyboard(true);
      }}
      onMouseDown={() => {
        setIsActive(true);
        setIsFocusedWithKeyboard(false);
      }}
      onTouchStart={() => setIsFocusedWithKeyboard(false)}
      onMouseUp={() => setIsActive(false)}
      className={` md-elevation ${
        props.disabled
          ? "md-elevation-0"
          : isActive || isFocused || !isHovered
          ? "md-elevation-1"
          : "md-elevation-2"
      } label-large`}
      style={{
        width: props.width || "fit-content",
        outlineOffset: isFocused && isFocusedWithKeyboard ? "2px" : undefined,
        outline:
          isFocused && isFocusedWithKeyboard
            ? "3px solid rgb(var(--md-sys-color-secondary))"
            : "",
        cursor: props.disabled ? "not-allowed" : "pointer",
        display: "flex",
        height: "40px",
        backgroundColor: props.disabled
          ? "rgba(var(--md-sys-color-on-surface), 12%)"
          : isFocused || isActive
          ? `color-mix(in srgb, ${
              props.containerColor ||
              "rgb(var(--md-sys-color-surface-container-low))"
            },rgb(var(--md-sys-color-primary)) 10%)`
          : isHovered
          ? `color-mix(in srgb, ${
              props.containerColor ||
              "rgb(var(--md-sys-color-surface-container-low))"
            },rgb(var(--md-sys-color-primary)) 8%)`
          : `${
              props.containerColor ||
              "rgb(var(--md-sys-color-surface-container-low))"
            }`,
        borderRadius: "20px",
        padding: props.icon != null ? "0px 24px 0px 16px" : "0px 24px",
        alignItems: "center",
        justifyContent: "center",
        color: props.disabled
          ? "rgba(var(--md-sys-color-on-surface), 38%)"
          : props.contentColor || "rgb(var(--md-sys-color-primary))",
      }}
    >
      {props.icon && (
        <span
          className="material-symbols-rounded"
          style={{
            fontSize: "18px !important",
            marginRight: "8px",
          }}
        >
          {props.icon}
        </span>
      )}
      {props.children}
    </button>
  );
};

export default ElevatedButton;
