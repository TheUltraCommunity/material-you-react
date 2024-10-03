import React, { useState } from "react";

type RadioButtonProps = {
  selected: boolean;
  onClick: () => void;
};

const RadioButton = (props: RadioButtonProps) => {
  return (
    <input
      type="radio"
      checked={props.selected}
      onClick={(e) => {
        props.onClick();
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "20px",
        height: "20px",
        padding: "3px",
        backgroundColor: props.selected
          ? "rgb(var(--md-sys-color-primary))"
          : "transparent",
        backgroundClip: "content-box",
        appearance: "none",
        border: props.selected
          ? "2px solid rgb(var(--md-sys-color-primary))"
          : "2px solid rgb(var(--md-sys-color-on-surface-variant))",
        cursor: "pointer",
      }}
    />
  );
};

export default RadioButton;
