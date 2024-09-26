import React, { useState } from "react";

type TopAppBarCenterSmallProps = {
  containerBackgroundColor?: string;
  headline: string;
  leadingIcon?: string;
  avatar?: boolean;
  avatarImage?: string;
  trailingIcons?: string[];
};

export default function TopAppBarCenterSmall(props: TopAppBarCenterSmallProps) {
  const [isScrolled, setScrollState] = useState(false);
  window.onscroll = function () {
    if (window.scrollY > 0) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };
  return (
    <div
      className={isScrolled ? "md-elevation-2" : "md-elevation-0"}
      style={{
        backgroundColor: `${
          props.containerBackgroundColor ??
          (isScrolled
            ? "rgb(var(--md-sys-color-surface-container))"
            : "rgb(var(--md-sys-color-surface))")
        }`,
        position: "sticky",
        width: "100vw",
        height: "64px",
        borderRadius: "0px",
        padding: "0px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "24px",
        top: "0",
        left: "0",
        color: "rgb(var(--md-sys-color-on-surface))",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* LeadingIcon */}
        {props.leadingIcon && (
          <div
            style={{
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          >
            <span className="material-symbols-rounded">
              {props.leadingIcon || "arrow_back"}
            </span>
          </div>
        )}

        {/* Headline */}
        <p
          className="title-large"
          style={{
            color: "rgb(var(--md-sys-color-on-surface))",
          }}
        >
          {props.headline}
        </p>
      </div>

      {/* Trailing Icons */}
      {(props.trailingIcons || props.avatar || props.avatarImage) && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {props.trailingIcons &&
            props.trailingIcons.map((icon, index) => (
              <div
                key={index}
                style={{
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  color: "rgb(var(--md-sys-color-on-surface-variant))",
                }}
              >
                <span className="material-symbols-rounded">{icon}</span>
              </div>
            ))}
          {(props.avatar || props.avatarImage) && (
            <div
              key={"avatar"}
              style={{
                width: "48px",
                fontSize: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "48px",
                cursor: "pointer",
                color: "rgb(var(--md-sys-color-on-surface-variant))",
              }}
            >
              {props.avatarImage ? (
                <img
                  src={props.avatarImage}
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              ) : (
                <span
                  className="material-symbols-rounded"
                  style={{
                    fontSize: "30px",
                  }}
                >
                  account_circle
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
