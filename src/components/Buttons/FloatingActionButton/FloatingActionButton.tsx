import React, { useEffect, useRef, useState } from "react";

type FloatingActionButtonProps = {
  icon: string;
  onClick: () => void;
};

const FloatingActionButton = (props: FloatingActionButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [parentClass, setParentClass] = useState("");

  useEffect(() => {
    const domNode = ref.current;
    if (domNode !== undefined && domNode !== null && domNode.parentNode) {
      setParentClass(domNode.parentElement?.className || "ID");
    }
  }, [ref.current]);

  return (
    <button
      ref={ref}
      className={
        parentClass.includes("bottom-app-bar")
          ? "md-elevation-0"
          : "md-elevation-3"
      }
      style={{
        backgroundColor: "rgb(var(--md-sys-color-primary-container))",
        width: "56px",
        height: "56px",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        className="material-symbols-rounded"
        style={{
          width: "24px",
          height: "24px",
          color: "rgb(var(--md-sys-color-on-primary-container))",
        }}
      >
        add
      </span>
    </button>
  );
};

export default FloatingActionButton;
