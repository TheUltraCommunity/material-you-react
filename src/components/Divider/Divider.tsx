import React from "react";

type DividerProps = 
    | { type : 'horizontal'; variant : "fullWidth" | "inset" | "middleInset" | "rightMargin"}
    | { type : 'vertical'; variant?: never};


/**
 * @description A Divider Component - Used to differentiate items.
 * @params type : string ( `horizontal` | `vertical` )
 * @params variant: string ( *Allowed Inputs ( 🔴 NOTE: only if type : horizontal )* = `fullWidth` | `inset` | `middleInset` | `rightMargin` )
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
                marginLeft: props.type === 'horizontal' ? 
                    props.variant === 'inset' || props.variant === 'middleInset' ? "16px" : '' : '',
                backgroundColor: 'rgb(var(--md-sys-color-outline-variant))',
                marginBottom : props.type === 'horizontal' ? "8px" : ''
            }}
        ></div>
    );
};
