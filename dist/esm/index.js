import React, { useState } from 'react';

const ElevatedButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    // const [isActive, setIsActive] = useState(false);
    return (React.createElement("button", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), className: `${props.disabled || isHovered ? "md-elevation-0" : "md-elevation-1"} label-large`, style: {
            cursor: props.disabled ? "not-allowed" : "pointer",
            display: "flex",
            height: "40px",
            backgroundColor: props.disabled
                ? "rgba(var(--md-sys-color-on-surface), 12%)"
                : "rgb(var(--md-sys-color-surface-container-low))",
            borderRadius: "20px",
            padding: props.icon != null ? "0px 24px 0px 16px" : "0px 24px",
            alignItems: "center",
            justifyContent: "center",
            color: props.disabled
                ? "rgba(var(--md-sys-color-on-surface), 38%)"
                : "rgb(var(--md-sys-color-primary))",
        } },
        props.icon && (React.createElement("span", { className: "material-symbols-rounded", style: {
                fontSize: "18px !important",
                marginRight: "8px",
            } }, props.icon)),
        props.children));
};

export { ElevatedButton };
//# sourceMappingURL=index.js.map
