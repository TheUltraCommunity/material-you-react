import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { Menu, MenuItem } from "../../Menus";

type OutlinedTextFieldProps = {
  value: string;
  onValueChange: (value: string) => void;
  type?: "textarea" | "" | "dropdown";
  options?: string[];
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

/**
* Props for OutlinedTextField Component
* @param (string) [required] `value` - Current value of the input field
* @param (function) [required] `onValueChange` - Handler function for value changes
* @param ("textarea" | "" | "dropdown") [optional] `type` - Type of input field
* @param (string[]) [optional] `options` - Available options for dropdown type
* @param (number) [optional] `rows` - Number of rows for textarea
* @param (string) [optional] `containerWidth` - Width of the input container
* @param (string) [optional] `leadingIcon` - Icon displayed at start of input
* @param (string) [required] `labelText` - Label text for the input field
* @param (string) [optional] `inputType` - HTML input type attribute
* @param (number) [optional] `maxLength` - Maximum allowed input length
* @param (boolean) [optional] `required` - Whether field is required
* @param (string) [optional] `supportingText` - Helper text below input
* @param (string) [optional] `trailingIcon` - Icon displayed at end of input
* @param (boolean) [optional] `disabled` - Whether field is disabled
* @param (boolean) [optional] `error` - Whether field is in error state
*/

export default function OutlinedTextField(props: OutlinedTextFieldProps) {
  const [givenInputType, setGivenInputType] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [parentBGColor, setParentBGColor] = useState<string | null>("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  // const textFieldRef = useRef<HTMLDivElement | null>(null);

  const [menuPosition, setMenuPosition] = useState<'Top' | 'Bottom'>('Bottom');
  const textFieldRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    props.onValueChange(e.target.value);
  };

  const handleMenuItemClick = (value: string) => {
    props.onValueChange(value);
    setIsMenuOpen(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (props.type === 'dropdown') {
      setIsMenuOpen(true);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (props.type === 'dropdown') {
      const isClickInsideMenu = menuRef.current?.contains(e.relatedTarget as Node);

      if (!isClickInsideMenu) {
        setTimeout(() => {
          setIsFocused(false);
        }, 200);
      }
    }
    else {
      setIsFocused(false);
    }
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
    if (props.inputType === "password") {
      setGivenInputType(givenInputType === "text" ? "password" : "text");
    } else {
      props.onValueChange("");
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

    if (props.type === 'dropdown') {
      if (textFieldRef.current) {
        const rect = textFieldRef.current.getBoundingClientRect();
        const menuTopPosition = rect.top;
        const menuBottomPosition = rect.bottom;
        setMenuPosition(`${menuTopPosition > menuBottomPosition ? 'Top' : 'Bottom'}`);
      };
    }
  }, [props.value, props.type]);

  useEffect(() => {
    if (parentBGColor === "") {
      if (textFieldRef.current) {
        let parentBackgroundColor = getParentBackgroundColor(textFieldRef.current);
        setParentBGColor(parentBackgroundColor);
      }
    }
  }, []);
  
  return (
    <div
      ref={textFieldRef}
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
        position: "relative"
      }}
    >
      {/* Input Container ( ~ except supporting text ) */}
      <div
        className={`outlined-text-field-inner-container ${isFocused ? "focused" : ""
          } ${props.error ? "error" : ""}`}
        style={{
          minHeight: "56px",
          height: "auto",
          padding: `${props.leadingIcon && props.trailingIcon
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
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {/* Leading Icon */}
        {props.leadingIcon && (
          <div
            className={`outlined-text-field-leading-icon ${props.error && "error"
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
              value={props.value}
              required={props.required}
              disabled={props.disabled}
              maxLength={props.maxLength}
              onChange={handleInputChange}
              placeholder=""
              className={`outlined-text-field-input ${props.error ? "error" : ""
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
              value={props.value}
              required={props.required}
              disabled={props.disabled}
              maxLength={props.maxLength}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (props.type === 'dropdown') {
                  e.preventDefault();
                }
              }}
              placeholder=""
              className={`outlined-text-field-input ${props.error ? "error" : ""
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
            className={`outlined-text-field-label ${props.error ? "error" : ""
              }`}
            style={{
              backgroundColor: `${isFocused && parentBGColor}`,
              left: `${isFocused 
                ? (props.leadingIcon ? "-38px" : "-2px") 
                : props.type === 'dropdown' && props.value !== ''
                  ? (props.leadingIcon ? "-38px" : "-2px") 
                  : props.value !== '' 
                    ? (props.leadingIcon ? "-38px" : "-2px") 
                    : ''
                }`,
            }}
          >
            {props.labelText}
            {props.required && "*"}
          </label>
        </div>

        {/* Trailing Icon */}
        {props.trailingIcon && props.value.length > 0 && (
          <div
            onClick={(e) => handleTrailingIconClick(e)}
            className={`outlined-text-field-trailing-icon ${props.error && "error"
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
          color: `${props.error
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
            {props.value.length}/{props.maxLength}
          </p>
        )}
      </div>

      {
        props.type === 'dropdown' && props.options && isMenuOpen &&
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: menuPosition === 'Top' ? 0 : '',
            bottom: menuPosition === 'Bottom' ? 0 : '',
            left: 0,
            zIndex: 10
          }}
        >
          <Menu>
            {
              props.options.map((item, index) => (
                <MenuItem
                  key={index}
                  label={item}
                  onClickCallback={() => handleMenuItemClick(item)}
                />
              ))
            }
          </Menu>
        </div>
      }
    </div>
  );
}
