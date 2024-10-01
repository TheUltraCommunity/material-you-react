import React, { useState } from "react";

type TopAppBarCenterMediumProps = {
  containerBackgroundColor?: string;
  headline: string;
  leadingIcon?: string;
  trailingIcons?: string[];
};

export default function TopAppBarCenterMedium(
  props: TopAppBarCenterMediumProps
) {
  const [isScrolled, setScrollState] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  window.onscroll = function () {
    if (window.scrollY > 0) {
      setScrollY(window.scrollY);
      setScrollState(true);
    } else {
      setScrollY(0);
      setScrollState(false);
    }
  };
  return (
    <div
      className="md-elevation-0 md-elevation"
      style={{
        zIndex: 1,
        backgroundColor: `${
          props.containerBackgroundColor ?? isScrolled
            ? "rgb(var(--md-sys-color-surface-container))"
            : "rgb(var(--md-sys-color-surface))"
        }`,
        width: "100vw",
        height: isScrolled ? `${112 - Math.min(96, scrollY) / 2}px` : "112px",
        borderRadius: "0px",
        padding: isScrolled ? "0px 16px" : "20px 16px 24px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: isScrolled ? "center" : "start",
        gap: "24px",
        position: "sticky",
        top: "0",
        left: "0",

        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: isScrolled ? "row" : "column",
          justifyContent: isScrolled ? "space-between" : "start",
          alignItems: "start",
          gap: "16px",
          width: isScrolled ? `100%` : "auto",
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
          className={isScrolled ? "title-large" : "headline-small"}
          style={{
            width: isScrolled ? "100%" : "auto",
            transition: "all 0.3s ease",
            textAlign: isScrolled ? "center" : "start",
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
