import React, { useState } from "react";

type RadioButtonProps = {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
};

const RadioButton = (props: RadioButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        setIsFocused(false);
      }}
      onMouseDown={() => {
        setIsActive(true);
      }}
      onMouseUp={() => setIsActive(false)}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "48px",
        height: "48px",
        justifyContent: "center",
      }}
    >
      <input
        type="radio"
        checked={props.selected}
        onClick={(e) => {
          props.onClick();
        }}
        onChange={() => {}}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          padding: "3px",
          backgroundColor: props.selected
            ? props.disabled
              ? "rgba(var(--md-sys-color-on-surface), 38%)"
              : "rgb(var(--md-sys-color-primary))"
            : "transparent",
          backgroundClip: "content-box",
          appearance: "none",
          border: props.disabled
            ? "2px solid rgba(var(--md-sys-color-on-surface), 38%)"
            : props.selected
            ? "2px solid rgb(var(--md-sys-color-primary))"
            : "2px solid rgb(var(--md-sys-color-on-surface-variant))",
          cursor: "pointer",
        }}
      />
      {!props.disabled && (
        <div
          style={{
            position: "absolute",
            width: "40px",
            height: "40px",
            pointerEvents: "none",
            top: "4px",
            // zIndex: 1,
            borderRadius: "20px",
            background: isActive
              ? props.selected != false
                ? "rgba(var(--md-sys-color-on-surface), 10%)"
                : "rgba(var(--md-sys-color-primary), 10%)"
              : isFocused
              ? props.selected == false
                ? "rgba(var(--md-sys-color-on-surface), 10%)"
                : "rgba(var(--md-sys-color-primary), 10%)"
              : isHovered
              ? props.selected == false
                ? "rgba(var(--md-sys-color-on-surface), 8%)"
                : "rgba(var(--md-sys-color-primary), 8%)"
              : "",
            transition: "background 0.3s ease",
          }}
        />
      )}
    </div>
  );
};

export default RadioButton;
