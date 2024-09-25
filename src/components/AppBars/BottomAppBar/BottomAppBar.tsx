import React, { useState } from "react";

type BottomAppBarProps = {
  backgroundColor?: string;
  items: string[];
  floatingActionButton?: React.ReactNode;
};

export default function BottomAppBar(props: BottomAppBarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      style={{
        backgroundColor: `${props.backgroundColor ?? "rgb(var(--md-sys-color-surface-container))"
          }`,
        width: "100vw",
        height: "80px",
        padding: `${props.floatingActionButton ? '16px' : '12px 16px'}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
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
        {props.items.map((element, index) => (
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            key={index}
            className={`
              ${!isHovered ? "md-elevation-0" : "md-elevation-1"}
              label-large material-symbols-rounded`}
            style={{
              width: "24px",
              height: "24px",
              cursor: 'pointer',
              color: `${isActive ? 'rgb(var(--md-sys-color-on-tertiary-container))' : 'rgb(var(--md-sys-color-on-secondary-container))'}`,
            }}
          >
            {element || "add"}
          </span>
        ))}
      </div>

      {props.floatingActionButton}
    </div>
  );
}
