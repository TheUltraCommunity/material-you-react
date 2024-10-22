import React from "react";

type MenuProps = {
    children : React.ReactNode
}

export default function Menu(props: MenuProps) {
    return(
        <div
            style={{
                width: '200px',
                // minWidth: '112px',
                // maxWidth: '280px',
                backgroundColor: 'rgb(var(--md-sys-color-surface-container))',
                height: 'fit-content',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                flexDirection: 'column',
                // overflow: 'hidden'
            }}
            className="md-elevation-2"
        >
            {
                props.children
            }
        </div>
    );
};

