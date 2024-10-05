import React, { MouseEvent, useEffect, useRef, useState } from "react";

type FilledTextFieldProps = {
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

export default function FilledTextField(props: FilledTextFieldProps) {
  const [givenInputType, setGivenInputType] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
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

    if (givenInputType === "") {
      setGivenInputType(props.inputType ?? "text");
    }
  }, [inputValue, props.type]);
  return (
    <div
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
        className={`filled-text-field-inner-container ${
          isFocused ? "focused" : ""
        } ${props.error ? "error" : ""}`}
        style={{
          width: "100%",
          minHeight: "56px",
          height: "auto",
          padding: `${
            props.leadingIcon && props.trailingIcon
              ? "8px 12px"
              : props.leadingIcon
              ? "8px 16px 8px 12px"
              : "8px 16px"
          }`,
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
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
            className={`filled-text-field-leading-icon ${
              props.error && "error"
            }`}
            style={{
              width: "24px",
              height: "24px",
              color: "rgb(var(--md-sys-color-on-surface-variant))",
              cursor: "none",
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
              className={`filled-text-field-input ${
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
              className={`filled-text-field-input ${
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
              }}
            />
          )}

          {/* label text */}
          <label
            className={`filled-text-field-label ${props.error ? "error" : ""}`}
          >
            {props.labelText}
            {props.required && "*"}
          </label>
        </div>

        {/* Trailing Icon */}
        {props.trailingIcon && inputValue.length > 0 && (
          <div
            onClick={(e) => handleTrailingIconClick(e)}
            className={`filled-text-field-trailing-icon ${
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
