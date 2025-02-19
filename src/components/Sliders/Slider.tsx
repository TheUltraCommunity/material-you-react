import React, { useState } from "react";

export default function Slider() {
    const [value, setValue] = useState<number>(50);

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

            {/* Active Track 🟩 */}
            <div
                style={{
                    width: `${value}%`,
                    height: "16px",
                    background: "#65558F",
                    borderTopLeftRadius: "48px",
                    borderBottomLeftRadius: "48px",
                    marginRight: "6px",
                    position: "relative"
                }}
            >
                {/* Start Indicator */}
                <div
                    style={{
                        width: "6px",
                        height: "6px",
                        background: "#65558F",
                        position: "absolute",
                        borderRadius: "100%",
                        left: 4,
                        top: 4,
                    }}
                >
                </div>
            </div>

            {/* Handle */}
            <div
                style={{
                    width: "4px",
                    height: "44px",
                    background: "#65558F",
                    borderRadius: "20px"
                }}
            >
            </div>

            {/* Inactive Track 🔴 */}
            <div
                style={{
                    flex: 1,
                    height: "16px",
                    background: "rgb(var(--md-sys-color-on-surface-variant))",
                    borderTopRightRadius: "48px",
                    borderBottomRightRadius: "48px",
                    marginLeft: "6px",
                    position: "relative"
                }}
            >
                {/* End Indicator */}
                <div
                    style={{
                        width: "6px",
                        height: "6px",
                        background: "#65558F",
                        position: "absolute",
                        borderRadius: "100%",
                        right: 4,
                        top: 4,
                    }}
                >
                </div>
            </div>
        </div>
    );
};
