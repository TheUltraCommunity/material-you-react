import React from "react";

type DividerProps = {
    type: "horizontal" | "vertical";
    variant : "fullWidth" | "inset" | "middleInset" | "rightMargin";
}

/**
 * @description A Divider Component - Used to differentiate items.
 * @params variant: string ( *Allowed Inputs* = `fullWidth`, `inset`, `middleInset`, `rightMargin` , `bottomMargin`)
*/

export default function Divider( props: DividerProps ) {
    return(
        <div
            className={`divider ${props.type}`}  
            style={{
                width: `${props.type === 'horizontal' ? 
                    `calc(100% - ${props.variant === 'fullWidth' ? 
                        '0px' : props.variant === 'inset' ? 
                            "16px" : props.variant === 'rightMargin' ? 
                                "8px" : "32px" })`
                                     : "1px" }`,
                height: `${props.type === 'horizontal' ? "1px" : "100%" }`,
                marginLeft: props.variant === 'inset' || props.variant === 'middleInset' ? "16px" : '',
                backgroundColor: 'rgb(var(--md-sys-color-outline-variant))',
                marginBottom : props.type === 'horizontal' ? "8px" : ''
            }}
        ></div>
    );
};
