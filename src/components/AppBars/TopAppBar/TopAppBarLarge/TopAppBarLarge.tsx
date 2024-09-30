import React, { useState } from "react";

type TopAppBarCenterLargeProps = {
  containerBackgroundColor?: string;
  headline: string;
  leadingIcon?: string;
  trailingIcons?: string[];
};

export default function TopAppBarCenterLarge(props: TopAppBarCenterLargeProps) {
  const [isScrolled, setScrollState] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  window.onscroll = function () {
    if (window.scrollY > 0) {
      setScrollState(true);
      setScrollY(window.scrollY);
    } else {
      setScrollState(false);
      setScrollY(0);
    }
  };
  return (
    <div
      style={{
        backgroundColor: `${
          props.containerBackgroundColor ?? isScrolled
            ? "rgb(var(--md-sys-color-surface-container))"
            : "rgb(var(--md-sys-color-surface))"
        }`,
        width: "100vw",
        height: isScrolled ? `${152 - Math.min(64, scrollY) / 2}px` : "152px",
        borderRadius: "0px",
        padding: isScrolled ? "16px" : "20px 16px 28px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        gap: "24px",
        position: "sticky",
        top: "0",
        left: "0",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "16px",
        }}
      >
        {/* LeadingIcon */}
        <div
          style={{
            width: "24px",
            height: "24px",
            color: "rgb(var(--md-sys-color-on-surface))",
            cursor: "pointer",
          }}
        >
          <span className="material-symbols-rounded">
            {props.leadingIcon || "arrow_back"}
          </span>
        </div>

        {/* Headline */}
        <p
          className="headline-medium"
          style={{
            whiteSpace: "pre-line",
            color: "rgb(var(--md-sys-color-on-surface))",
          }}
        >
          {props.headline}
        </p>
      </div>

      {/* Trailing Icons */}
      {props.trailingIcons && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {props.trailingIcons.map((icon, index) => (
            <div
              key={index}
              style={{
                width: "24px",
                height: "24px",
                color: "rgb(var(--md-sys-color-on-surface-variant))",
                cursor: "pointer",
              }}
            >
              <span className="material-symbols-rounded">{icon}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
