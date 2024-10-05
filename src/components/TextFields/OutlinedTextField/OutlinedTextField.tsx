import React, { MouseEvent, useEffect, useRef, useState } from "react";

type OutlinedTextFieldProps = {
  type?: "textarea" | "";
  rows?: number;
  containerWidth?: string;
  leadingIcon?: string;
  labelText: string;
  inputType?: string;
  maxLength?: number;
  required?: boolean;
  supportingText?: string;
  trailingIcon?: string;
  disabled?: boolean;
  error?: boolean;
};

export default function OutlinedTextField(props: OutlinedTextFieldProps) {
  const [givenInputType, setGivenInputType] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [parentBGColor, setParentBGColor] = useState<string | null>("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  // Recursively gets the background color of the parent, which uses this component.
  const getParentBackgroundColor = (element: HTMLElement | null) => {
    if (!element) return null;

    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor;

    if (bgColor !== "transparent" && bgColor !== "rgba(0, 0, 0, 0)") {
      return bgColor;
    }

    return getParentBackgroundColor(element.parentElement);
  };

  const handleTrailingIconClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log("trailing button is clicked");
    if (props.inputType === "password") {
      setGivenInputType(givenInputType === "text" ? "password" : "text");
    } else {
      setInputValue("");
    }
  };

  useEffect(() => {
    if (props.type === "textarea" && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }

    if (parentBGColor === "") {
      if (childRef.current) {
        let parentBackgroundColor = getParentBackgroundColor(childRef.current);
        setParentBGColor(parentBackgroundColor);
      }
    }

    if (givenInputType === "") {
      setGivenInputType(props.inputType ?? "text");
    }
  }, [inputValue, props.type]);
  return (
    <div
      ref={childRef}
      style={{
        width: props.containerWidth ?? "",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "4px",
        opacity: props.disabled ? 0.4 : 1,
        pointerEvents: props.disabled ? "none" : "auto",
        cursor: "pointer",

        transition: "all 0.3s ease",
      }}
    >
      {/* Input Container ( ~ except supporting text ) */}
      <div
        className={`outlined-text-field-inner-container ${
          isFocused ? "focused" : ""
        } ${props.error ? "error" : ""}`}
        style={{
          minHeight: "56px",
          height: "auto",
          padding: `${
            props.leadingIcon && props.trailingIcon
              ? "8px 12px"
              : props.leadingIcon
              ? "8px 16px 8px 12px"
              : "8px 16px"
          }`,
          borderRadius: "var(--md-sys-shape-corner-extra-small-default-size)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: `${props.leadingIcon || props.trailingIcon ? "16px" : "0px"}`,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {/* Leading Icon */}
        {props.leadingIcon && (
          <div
            className={`outlined-text-field-leading-icon ${
              props.error && "error"
            }`}
            style={{
              width: "24px",
              height: "24px",
              cursor: "none",
              userSelect: "none",
            }}
          >
            <span className="material-symbols-rounded">
              {props.leadingIcon || ""}
            </span>
          </div>
        )}

        <div
          className="filled-text-field-input-box"
          style={{ position: "relative" }}
        >
          {/* input field */}
          {props.type === "textarea" ? (
            <textarea
              ref={textareaRef}
              value={inputValue}
              required={props.required}
              disabled={props.disabled}
              maxLength={props.maxLength}
              onChange={handleInputChange}
              placeholder=""
              className={`outlined-text-field-input ${
                props.error ? "error" : ""
              }`}
              style={{
                color: "rgb(var(--md-sys-color-on-surface))",
                font: "var(--md-sys-typescale-body-large-font)",
                lineHeight: "var(--md-sys-typescale-body-large-line-height)",
                fontSize: "var(--md-sys-typescale-body-large-size)",
                fontWeight: "var(--md-sys-typescale-body-large-weight)",
                letterSpacing: "var(--md-sys-typescale-body-large-tracking)",
                caretColor: props.error
                  ? "rgb(var(--md-sys-color-error))"
                  : "rgb(var(--md-sys-color-primary))",
                resize: "none",
                overflow: "hidden",
              }}
            />
          ) : (
            <input
              type={givenInputType}
              value={inputValue}
              required={props.required}
              disabled={props.disabled}
              maxLength={props.maxLength}
              onChange={handleInputChange}
              placeholder=""
              className={`outlined-text-field-input ${
                props.error ? "error" : ""
              }`}
              style={{
                color: "rgb(var(--md-sys-color-on-surface))",
                font: "var(--md-sys-typescale-body-large-font)",
                lineHeight: "var(--md-sys-typescale-body-large-line-height)",
                fontSize: "var(--md-sys-typescale-body-large-size)",
                fontWeight: "var(--md-sys-typescale-body-large-weight)",
                letterSpacing: "var(--md-sys-typescale-body-large-tracking)",
                caretColor: props.error
                  ? "rgb(var(--md-sys-color-error))"
                  : "rgb(var(--md-sys-color-primary))",
                overflow: "hidden",
              }}
            />
          )}

          {/* label text */}
          <label
            className={`outlined-text-field-label ${
              props.error ? "error" : ""
            }`}
            style={{
              backgroundColor: `${isFocused && parentBGColor}`,
              left: `${
                isFocused ? (props.leadingIcon ? "-38px" : "-2px") : ""
              }`,
            }}
          >
            {props.labelText}
            {props.required && "*"}
          </label>
        </div>

        {/* Trailing Icon */}
        {props.trailingIcon && inputValue.length > 0 && (
          <div
            onClick={(e) => handleTrailingIconClick(e)}
            className={`outlined-text-field-trailing-icon ${
              props.error && "error"
            }`}
            style={{
              width: "24px",
              height: "24px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {" "}
            {props.inputType === "password" ? (
              <span className="material-symbols-rounded">
                {givenInputType === "text" ? "visibility_off" : "visibility"}
              </span>
            ) : (
              <span className="material-symbols-rounded">
                {props.trailingIcon || ""}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Supporting text + Input Count */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          padding: "0px 16px",
          gap: "16px",
          color: `${
            props.error
              ? "rgb(var(--md-sys-color-error))"
              : "rgb(var(--md-sys-color-on-surface-variant))"
          }`,
          font: "var(--md-sys-typescale-body-small-font)",
          fontWeight: "var(--md-sys-typescale-body-small-weight)",
          fontSize: "var(--md-sys-typescale-body-small-size)",
          lineHeight: "var(--md-sys-typescale-body-small-line-height)",
          letterSpacing: "var(--md-sys-typescale-body-small-tracking)",
        }}
      >
        {/* Supporting text */}
        <p>{props.supportingText}</p>

        {/* Input length */}
        {props.maxLength && (
          <p>
            {inputValue.length}/{props.maxLength}
          </p>
        )}
      </div>
    </div>
  );
}
