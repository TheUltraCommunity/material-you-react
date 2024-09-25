import React from "react";

type BottomAppBarProps = {
  backgroundColor?: string;
  items: string[];
  floatingActionButton?: React.ReactNode;
};

export default function BottomAppBar(props: BottomAppBarProps) {
  return (
    <div
      style={{
        backgroundColor: `${
          props.backgroundColor ?? "rgb(var(--md-sys-color-surface-container))"
        }`,
        width: "100vw",
        height: "80px",
        padding: "12px 16px 12px 16px",
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
            key={index}
            className="material-symbols-rounded"
            style={{
              width: "24px",
              height: "24px",
              color: "rgb(var(--md-sys-color-on-secondary-container))",
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
