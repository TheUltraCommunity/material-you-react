import React, { useEffect } from "react";

type BadgeProps = {
  content?: string;
  disableAlign?: boolean | true;
};
const Badge = (props: BadgeProps) => {
  if (props.content && props.content.length > 4) {
    throw new Error("Large badges should have a maximum of 4 characters");
  }
  const badgeRef = React.createRef<HTMLDivElement>();
  useEffect(() => {
    if (badgeRef.current !== null) {
      if (badgeRef.current.parentElement != null && !props.disableAlign) {
        badgeRef.current.parentElement.style.position = "relative";
      }
    }
  }, [badgeRef]);
  return props.content ? (
    <div
      ref={badgeRef}
      style={{
        top: !props.disableAlign ? "-2px" : "",
        right: !props.disableAlign
          ? `${-(props.content.length * 7.5) + 14}px`
          : "",
        position: !props.disableAlign ? "absolute" : "unset",
        height: "16px",
        width: "fit-content",
        maxWidth: "34px",
        padding: "0 4px",
        borderRadius: "8px",
        backgroundColor: "rgb(var(--md-sys-color-error))",
        color: "rgb(var(--md-sys-color-on-error))",
      }}
    >
      <p className="label-small">{props.content}</p>
    </div>
  ) : (
    <div
      ref={badgeRef}
      style={{
        right: "0",
        top: "0",
        position: "absolute",
        height: "6px",
        width: "6px",
        borderRadius: "50%",
        backgroundColor: "rgb(var(--md-sys-color-error))",
      }}
    ></div>
  );
};

export default Badge;
