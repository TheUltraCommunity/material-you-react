import React from "react";

type DividerProps = {
    variant : DividerVariants
}

enum DividerVariants {
    fullWidth,
    inset,
    middleInset,
    rightMargin,
    bottomMargin
}

export default function Divider( props: DividerProps ) {
    return(
        <div
            className={`divider ${props.variant}`}  
            style={{
                height: '1px',
                backgroundColor: 'rgb(var(--md-sys-color-outline-variant))'
            }}
        ></div>
    );
};
