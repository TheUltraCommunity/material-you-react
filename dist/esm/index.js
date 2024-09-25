import React, { useState } from 'react';

function BottomAppBar(props) {
    var _a;
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    return (React.createElement("div", { style: {
            backgroundColor: `${(_a = props.backgroundColor) !== null && _a !== void 0 ? _a : "rgb(var(--md-sys-color-surface-container))"}`,
            width: "100vw",
            height: "80px",
            padding: `${props.floatingActionButton ? '16px' : '12px 16px'}`,
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
            } }, props.items.map((element, index) => (React.createElement("span", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), onMouseDown: () => setIsActive(true), onMouseUp: () => setIsActive(false), key: index, className: `
              ${!isHovered ? "md-elevation-0" : "md-elevation-1"}
              label-large material-symbols-rounded`, style: {
                width: "24px",
                height: "24px",
                cursor: 'pointer',
                color: `${isActive ? 'rgb(var(--md-sys-color-on-tertiary-container))' : 'rgb(var(--md-sys-color-on-secondary-container))'}`,
            } }, element || "add")))),
        props.floatingActionButton));
}

function TopAppBarCenterAligned(props) {
    var _a;
    return (React.createElement("div", { style: {
            backgroundColor: `${(_a = props.containerBackgroundColor) !== null && _a !== void 0 ? _a : "rgb(var(--md-sys-color-surface-container))"}`,
            width: '100vw',
            height: '64px',
            borderRadius: '0px',
            padding: '0px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            position: 'fixed',
            top: '0',
            left: '0'
        } },
        React.createElement("div", { style: {
                width: '24px',
                height: '24px',
                color: 'rgb(var(--md-sys-color-surface))',
                cursor: 'pointer'
            } },
            React.createElement("span", { className: "material-symbols-rounded" }, props.leadingIcon || 'menu')),
        React.createElement("p", { style: {
                fontWeight: 'var(--md-sys-typescale-title-large-weight)',
                fontSize: 'var(--md-sys-typescale-title-large-size)',
                lineHeight: 'var(--md-sys-typescale-title-large-line-height)',
                letterSpacing: 'var(--md-sys-typescale-title-large-tracking)',
                backgroundColor: 'rgb(var(--md-sys-color-on-surface: 29, 27, 32))'
            } }, props.headline),
        React.createElement("div", { style: {
                width: '24px',
                height: '24px',
                color: 'rgb(var(--md-sys-color-on-surface-variant))',
                cursor: 'pointer'
            } },
            React.createElement("span", { className: "material-symbols-rounded" }, props.trailingIcon || 'account_circle'))));
}

function TopAppBarCenterSmall(props) {
    var _a;
    return (React.createElement("div", { style: {
            backgroundColor: `${(_a = props.containerBackgroundColor) !== null && _a !== void 0 ? _a : "rgb(var(--md-sys-color-surface-container))"}`,
            width: '100vw',
            height: '64px',
            borderRadius: '0px',
            padding: '0px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            position: 'fixed',
            top: '0',
            left: '0'
        } },
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px'
            } },
            React.createElement("div", { style: {
                    width: '24px',
                    height: '24px',
                    color: 'rgb(var(--md-sys-color-surface))',
                    cursor: 'pointer'
                } },
                React.createElement("span", { className: "material-symbols-rounded" }, props.leadingIcon || 'arrow_back')),
            React.createElement("p", { style: {
                    fontWeight: 'var(--md-sys-typescale-title-small-weight)',
                    fontSize: 'var(--md-sys-typescale-title-small-size)',
                    lineHeight: 'var(--md-sys-typescale-title-small-line-height)',
                    letterSpacing: 'var(--md-sys-typescale-title-small-tracking)',
                    backgroundColor: 'rgb(var(--md-sys-color-on-surface: 29, 27, 32))'
                } }, props.headline)),
        props.trailingIcons && (React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px'
            } }, props.trailingIcons.map((icon, index) => (React.createElement("div", { key: index, style: {
                width: '24px',
                height: '24px',
                color: 'rgb(var(--md-sys-color-on-surface-variant))',
                cursor: 'pointer'
            } },
            React.createElement("span", { className: "material-symbols-rounded" }, icon))))))));
}

function TopAppBarCenterMedium(props) {
    var _a;
    return (React.createElement("div", { style: {
            backgroundColor: `${(_a = props.containerBackgroundColor) !== null && _a !== void 0 ? _a : "rgb(var(--md-sys-color-surface-container))"}`,
            width: '100vw',
            height: '112px',
            borderRadius: '0px',
            padding: '0px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            position: 'fixed',
            top: '0',
            left: '0'
        } },
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: '16px'
            } },
            React.createElement("div", { style: {
                    width: '24px',
                    height: '24px',
                    color: 'rgb(var(--md-sys-color-surface))',
                    cursor: 'pointer'
                } },
                React.createElement("span", { className: "material-symbols-rounded" }, props.leadingIcon || 'arrow_back')),
            React.createElement("p", { style: {
                    fontFamily: 'var(--md-sys-typescale-headline-medium-font-style)',
                    fontWeight: 'var(--md-sys-typescale-headline-medium-weight)',
                    fontSize: 'var(--md-sys-typescale-headline-medium-size)',
                    lineHeight: 'var(--md-sys-typescale-headline-medium-line-height)',
                    letterSpacing: 'var(--md-sys-typescale-headline-medium-tracking)',
                    backgroundColor: 'rgb(var(--md-sys-color-on-surface: 29, 27, 32))'
                } }, props.headline)),
        props.trailingIcons && (React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px'
            } }, props.trailingIcons.map((icon, index) => (React.createElement("div", { key: index, style: {
                width: '24px',
                height: '24px',
                color: 'rgb(var(--md-sys-color-on-surface-variant))',
                cursor: 'pointer'
            } },
            React.createElement("span", { className: "material-symbols-rounded" }, icon))))))));
}

function TopAppBarCenterLarge(props) {
    var _a;
    return (React.createElement("div", { style: {
            backgroundColor: `${(_a = props.containerBackgroundColor) !== null && _a !== void 0 ? _a : "rgb(var(--md-sys-color-surface-container))"}`,
            width: '100vw',
            height: '152px',
            borderRadius: '0px',
            padding: '20px 16px 28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '24px',
            position: 'fixed',
            top: '0',
            left: '0'
        } },
        React.createElement("div", { style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'start',
                gap: '16px'
            } },
            React.createElement("div", { style: {
                    width: '24px',
                    height: '24px',
                    color: 'rgb(var(--md-sys-color-surface))',
                    cursor: 'pointer'
                } },
                React.createElement("span", { className: "material-symbols-rounded" }, props.leadingIcon || 'arrow_back')),
            React.createElement("p", { style: {
                    fontFamily: 'var(--md-sys-typescale-headline-large-font-style)',
                    fontWeight: 'var(--md-sys-typescale-headline-large-weight)',
                    fontSize: 'var(--md-sys-typescale-headline-large-size)',
                    lineHeight: 'var(--md-sys-typescale-headline-large-line-height)',
                    letterSpacing: 'var(--md-sys-typescale-headline-large-tracking)',
                    backgroundColor: 'rgb(var(--md-sys-color-on-surface: 29, 27, 32))'
                } }, props.headline)),
        props.trailingIcons && (React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '24px'
            } }, props.trailingIcons.map((icon, index) => (React.createElement("div", { key: index, style: {
                width: '24px',
                height: '24px',
                color: 'rgb(var(--md-sys-color-on-surface-variant))',
                cursor: 'pointer'
            } },
            React.createElement("span", { className: "material-symbols-rounded" }, icon))))))));
}

const ElevatedButton = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);
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

export { BottomAppBar, ElevatedButton, TopAppBarCenterAligned, TopAppBarCenterLarge as TopAppBarLarge, TopAppBarCenterMedium as TopAppBarMedium, TopAppBarCenterSmall as TopAppBarSmall };
//# sourceMappingURL=index.js.map
