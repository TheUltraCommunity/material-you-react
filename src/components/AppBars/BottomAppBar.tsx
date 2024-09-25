import React from "react";

type BottomAppBarProps = {
    items: string[],
    floatingActionButton: boolean,
    icon?: string,
}

export default function BottomAppBar(props: BottomAppBarProps) {
    return (
        <div
            style={{
                width: '100vw',
                height: '80px',
                padding: '12px 16px 12px 4px',
                display: 'flex',
                justifyItems: 'between',
                alignItems: 'center',
                gap: '16px'
            }}
        >

            {
                props.items.map((element, index) => <span key={index} className="material-symbols-outlined" style={{ width: '24px', height: '24px' }}>{element || 'add'}</span>)
            }

            {
                props.floatingActionButton && <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    display: 'flex',
                    justifyItems: 'center',
                    alignItems: 'center',
                }}
                >
                    <span className="material-symbols-outlined" style={{ width: '24px', height: '24px' }}>{props.icon || 'add'}</span>
                </div>
            }
        </div>
    );
};
