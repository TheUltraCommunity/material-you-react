import React, { useState } from "react";

type CheckboxProps = {
  value?: boolean | null | undefined;
  isError?: boolean;
  onChange?: (value?: boolean | null) => void;
  disabled?: boolean;
};
const Checkbox = (props: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  //TODO: Add ripple effect

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        type="checkbox"
        className={props.value == null ? "null" : ""}
        checked={props.value != false}
        onChange={(e) =>
          props.onChange?.(
            props.value === false ? null : props.value === null ? true : false
          )
        }
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "2px",
          display: "flex",
          cursor: props.disabled ? "" : "pointer",
          alignItems: "center",
          justifyContent: "center",
          border:
            props.value != false
              ? "none"
              : props.disabled
              ? "2px solid rgba(var(--md-sys-color-on-surface), 38%)"
              : props.isError
              ? "2px solid rgb(var(--md-sys-color-error))"
              : "2px solid rgb(var(--md-sys-color-on-surface-variant))",
          backgroundColor:
            props.value != false
              ? props.disabled
                ? "rgba(var(--md-sys-color-on-surface), 38%)"
                : props.isError
                ? "rgb(var(--md-sys-color-error))"
                : "rgb(var(--md-sys-color-primary))"
              : "",
          MozAppearance: "none",
          color: "rgb(var(--md-sys-color-on-primary))",
          WebkitAppearance: "none",
          appearance: "none",
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
            background: isHovered
              ? props.isError
                ? "rgba(var(--md-sys-color-error), 8%)"
                : props.value == false
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
export default Checkbox;
