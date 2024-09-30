import React, { useState } from "react";

type CheckboxProps = {
  value?: boolean;
  isError?: boolean | null;
  onChange?: (value?: boolean) => void;
};
const Checkbox = (props: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={props.value}
      onChange={(e) => props.onChange?.(e.target.checked)}
      style={{
        width: "18px",
        height: "18px",
        borderRadius: "2px",
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        border: props.value
          ? "none"
          : "2px solid rgb(var(--md-sys-color-on-surface-variant))",
        backgroundColor: props.value
          ? props.isError
            ? "rgb(var(--md-sys-color-error))"
            : "rgb(var(--md-sys-color-primary))"
          : "",
        MozAppearance: "none",
        content: props.value == null ? "f88a" : "\xb9",
        color: "rgb(var(--md-sys-color-on-primary))",
        WebkitAppearance: "none",
        appearance: "none",
      }}
    />
  );
};
export default Checkbox;
