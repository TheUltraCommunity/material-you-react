import React, { useState } from "react";

type FilledButtonProps = {
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  containerColor?: string;
  contentColor?: string;
  width?: string;
  draggable?: boolean;
};

const FilledButton = (props: FilledButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocusedWithKeyboard, setIsFocusedWithKeyboard] = useState(true);
  const [isDragged, setIsDragged] = useState(false);
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
      onDragStart={() => setIsDragged(true)}
      onDragEnd={() => setIsDragged(false)}
      draggable={props.draggable ?? true}
      className={` md-elevation 
            ${
              isDragged
                ? "md-elevation-3"
                : !isHovered
                ? "md-elevation-0"
                : "md-elevation-1"
            }
       label-large`}
      style={{
        width: props.width || "fit-content",
        outlineOffset: isFocusedWithKeyboard ? "2px" : undefined,
        outline:
          isFocused && !isDragged && isFocusedWithKeyboard
            ? "3px solid rgb(var(--md-sys-color-secondary))"
            : "",
        cursor: props.disabled ? "not-allowed" : "pointer",
        display: "flex",
        height: "40px",
        backgroundColor: props.disabled
          ? "rgba(var(--md-sys-color-on-surface), 12%)"
          : isDragged
          ? `color-mix(in srgb, ${
              props.containerColor || "rgb(var(--md-sys-color-primary))"
            },rgb(var(--md-sys-color-on-primary)) 16%)`
          : isFocused || isActive
          ? `color-mix(in srgb, ${
              props.containerColor || "rgb(var(--md-sys-color-primary))"
            },rgb(var(--md-sys-color-on-primary)) 10%)`
          : isHovered
          ? `color-mix(in srgb, ${
              props.containerColor || "rgb(var(--md-sys-color-primary))"
            },rgb(var(--md-sys-color-on-primary)) 8%)`
          : `${props.containerColor || "rgb(var(--md-sys-color-primary))"}`,
        borderRadius: "20px",
        padding: props.icon != null ? "0px 24px 0px 16px" : "0px 24px",
        alignItems: "center",
        justifyContent: "center",
        color: props.disabled
          ? "rgba(var(--md-sys-color-on-surface), 38%)"
          : props.contentColor || "rgb(var(--md-sys-color-on-primary))",
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

export default FilledButton;
