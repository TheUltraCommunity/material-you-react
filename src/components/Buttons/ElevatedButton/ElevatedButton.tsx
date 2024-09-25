import React from "react";

type ElevatedButtonProps = {
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
};

const ElevatedButton = (props: ElevatedButtonProps) => {
  return (
    <button
      className={`${
        props.disabled ? "md-elevation-0" : "md-elevation-1"
      } label-large`}
      style={{
        cursor: props.disabled ? "not-allowed" : "pointer",
        display: "flex",
        height: "40px",
        backgroundColor: props.disabled
          ? "rgba(var(--md-sys-color-on-surface), 12%)"
          : "rgb(var(--md-sys-color-surface-container-low))",
        borderRadius: "20px",
        padding: props.icon != null ? "0px 24px 0px 16px" : "0px 24px",
        alignItems: "center",
        justifyContent: "center",
        color: props.disabled
          ? "rgba(var(--md-sys-color-on-surface), 38%)"
          : "rgb(var(--md-sys-color-primary))",
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
