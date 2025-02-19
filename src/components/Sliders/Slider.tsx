import React from "react";

export default function Slider() {
    return (
        // Parent Container
        <div
            style={{
                width: "400px",
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            {/* Active Track */}
            <div
                style={{
                    flex: 1,
                    height: "16px",
                    background: "rgb(var(--md-sys-color-primary))",
                    borderTopLeftRadius: "48px",
                    borderBottomLeftRadius: "48px",
                    marginRight: "6px",
                    position: "relative"
                }}
            >
                {/* Start Indicator */}
                <div
                    style={{
                        width: "2px",
                        height: "2px",
                        background: "rgb(var(--md-sys-color-primary))",
                        position: "absolute",
                        left: 4,
                    }}
                >
                </div>
            </div>

            {/* Handle */}
            <div
                style={{
                    width: "4px",
                    height: "44px",
                    background: "rgb(var(--md-sys-color-primary))",
                    borderRadius: "20px"
                }}
            >
            </div>

            {/* Inactive Track */}
            <div
                style={{
                    flex: 1,
                    height: "16px",
                    background: "rgb(var(--md-sys-color-on-primary))",
                    borderTopRightRadius: "48px",
                    borderBottomRightRadius: "48px",
                    marginLeft: "6px",
                    position: "relative"
                }}
            >
                {/* End Indicator */}
                <div
                    style={{
                        width: "2px",
                        height: "2px",
                        background: "rgb(var(--md-sys-color-primary))",
                        position: "absolute",
                        right: 4,
                    }}
                >
                </div>
            </div>
        </div>
    );
};
