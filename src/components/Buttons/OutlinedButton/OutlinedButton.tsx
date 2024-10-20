import React, { useState } from "react";

type OutlinedButtonProps<T = void> = {
  children: React.ReactNode[] | React.ReactNode;
  onClickCallback: (params: T) => void;
  icon?: string;
  disabled?: boolean;
  contentColor?: string;
  width?: string;
};

const OutlinedButton = <T,>(props: OutlinedButtonProps<T>) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocusedWithKeyboard, setIsFocusedWithKeyboard] = useState(true);
  
  const handleClick =() => {
    const params = {} as T;
    props.onClickCallback(params);
  };

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
      onClick={handleClick}
      className={`md-elevation-0
         label-large`}
      style={{
        width: props.width || "fit-content",
        outlineOffset: isFocused && isFocusedWithKeyboard ? "2px" : undefined,
        outline:
          isFocused && isFocusedWithKeyboard
            ? "3px solid rgb(var(--md-sys-color-secondary))"
            : "",
        border: props.disabled
          ? "rgba(var(--md-sys-color-on-surface), 12%)"
          : isFocused
          ? "1px solid rgb(var(--md-sys-color-primary))"
          : "1px solid rgb(var(--md-sys-color-outline))",
        cursor: props.disabled ? "not-allowed" : "pointer",
        display: "flex",
        height: "40px",
        backgroundColor: props.disabled
          ? "transparent"
          : //
          isFocused || isActive
          ? `rgba(var(--md-sys-color-primary), 10%)`
          : isHovered
          ? `rgba(var(--md-sys-color-primary), 8%)`
          : "transparent",
        //   : `${props.containerColor || "rgb(var(--md-sys-color-primary))"}`,
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

export default OutlinedButton;
