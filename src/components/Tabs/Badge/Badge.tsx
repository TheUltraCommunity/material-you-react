import React from "react";

type BadgeProps = {
    num?: number
};

export default function Badge(props:BadgeProps) {
    return(
        <p
            style={{
                background: 'red',
                borderRadius: '100%',
                minWidth: '8px',
                minHeight: '8px',
                width: 'fit-content',
                height: 'fit-content',
                padding: '4px',
                display : 'flex',
                justifyContent: 'center',
                alignItems : 'center',
                position: 'absolute',
                top: 0,
                right: 0,
                fontSize: '12px',

            }}
        >
            {props.num}
        </p>
    );
};
