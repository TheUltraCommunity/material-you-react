'use strict';

var React = require('react');

function BottomAppBar(props) {
    var _a;
    return (React.createElement("div", { style: {
            backgroundColor: `${(_a = props.backgroundColor) !== null && _a !== void 0 ? _a : "rgb(var(--md-sys-color-surface-container))"}`,
            width: "100vw",
            height: "80px",
            padding: "12px 16px 12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            left: 0,
        } },
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
            } }, props.items.map((element, index) => (React.createElement("span", { key: index, className: "material-symbols-rounded", style: {
                width: "24px",
                height: "24px",
                color: "rgb(var(--md-sys-color-on-secondary-container))",
            } }, element || "add")))),
        props.floatingActionButton));
}

const ElevatedButton = (props) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);
    return (React.createElement("button", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), onMouseDown: () => setIsActive(true), onMouseUp: () => setIsActive(false), className: `${props.disabled ? "md-elevation-0" : "md-elevation-1"} label-large`, style: {
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

exports.BottomAppBar = BottomAppBar;
exports.ElevatedButton = ElevatedButton;
//# sourceMappingURL=index.js.map
