import React from "react";

type DividerProps = {
    variant : "fullWidth" | "inset" | "middleInset" | "rightMargin" | "bottomMargin";
}

/**
 * @description A Divider Component - Used to differentiate items.
 * @params variant: string ( *Allowed Inputs* = `fullWidth`, `inset`, `middleInset`, `rightMargin` , `bottomMargin`)
*/

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
