import React, { useState } from "react";

type FilledTextFieldProps = {
    containerWidth: string;
    leadingIcon?: string;
    labelText: string;
    inputType: string;
    maxLength?: number;
    required: boolean;
    supportingText?: string;
    trailingIcon?: string
}

export default function FilledTextField(props: FilledTextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    return (

        <div
            style={{
                width: `${props.containerWidth}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '4px',
            }}
        >
            {/* Input Container ( ~ except supporting text ) */}
            <div
                className={`filled-text-field-inner-container ${isFocused ? "focused" : ""}`}
                style={{
                    backgroundColor: 'rgb(var(--md-sys-color-surface-container-highest))',
                    width: '100%',
                    minHeight: '56px',
                    height: 'auto',
                    padding: `${props.leadingIcon && props.trailingIcon ? "8px 12px" : props.leadingIcon ? "8px 16px 8px 12px" : "8px 16px"}`,
                    borderBottom: '1px solid rgb(var(--md-sys-color-on-surface-variant))',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: `${props.leadingIcon || props.trailingIcon ? "16px" : "0px"}`
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >

                {/* Leading Icon */}
                {props.leadingIcon && (
                    <div
                        style={{
                            width: "24px",
                            height: "24px",
                            color: 'rgb(var(--md-sys-color-on-surface-variant))'
                        }}
                    >
                        <span className="material-symbols-rounded">
                            {props.leadingIcon || ''}
                        </span>
                    </div>
                )}

                <div className="filled-text-field-input-box" style={{ position: 'relative' }}>

                    {/* input field */}
                    <input
                        type={props.inputType}
                        required={props.required}
                        maxLength={props.maxLength}
                        onChange={handleInputChange}
                        placeholder=""
                        className="filled-text-field-input"
                        style={{
                            color: 'rgb(var(--md-sys-color-on-surface))',
                            font: 'var(--md-sys-typescale-body-large-font)',
                            lineHeight: 'var(--md-sys-typescale-body-large-line-height)',
                            fontSize: 'var(--md-sys-typescale-body-large-size)',
                            fontWeight: 'var(--md-sys-typescale-body-large-weight)',
                            letterSpacing: 'var(--md-sys-typescale-body-large-tracking)',
                            textWrap:  'wrap'
                        }}
                    />

                    {/* label text */}
                    <label
                        className="filled-text-field-label"
                    >
                        {props.labelText}
                    </label>

                </div>

                {/* Trailing Icon */}
                {props.trailingIcon && (
                    <div
                        style={{
                            width: "24px",
                            height: "24px",
                            color: 'rgb(var(--md-sys-color-on-surface-variant))',
                            cursor: 'pointer'
                        }}
                    >
                        <span className="material-symbols-rounded">
                            {props.trailingIcon || ''}
                        </span>
                    </div>
                )}

            </div>

            {/* Supporting text + Input Count */}
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                padding: '0px 16px',
                gap: '16px',
                font: 'var(--md-sys-typescale-body-small-font)',
                fontWeight: 'var(--md-sys-typescale-body-small-weight)',
                fontSize: 'var(--md-sys-typescale-body-small-size)',
                lineHeight: 'var(--md-sys-typescale-body-small-line-height)',
                letterSpacing: 'var(--md-sys-typescale-body-small-tracking)'
            }}>

                {/* Supporting text */}
                <p>
                    {props.supportingText}
                </p>

                {/* Input length */}
                {props.maxLength && <p>{inputValue.length}/{props.maxLength}</p>}
            </div>
        </div>

    );
};
