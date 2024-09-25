import React from "react";

type BottomAppBarProps = {
    backgroundColor?: string,
    items: string[],
    floatingActionButton: boolean,
    floatingActionButtonBackgroundColor: string,
    floatingActionButtonIcon?: string,
}

export default function BottomAppBar(props: BottomAppBarProps) {
    return (
        <div
            style={{
                backgroundColor: `${props.backgroundColor ?? 'var(--md-sys-color-surface-container)'}`,
                width: '100vw',
                height: '80px',
                padding: '12px 16px 12px 16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'fixed',
                bottom: 0,
                left: 0,
            }}
        >


            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '16px',
                }}
            >
                {
                    props.items.map((element, index) => <span 
                        key={index}
                        className="material-symbols-outlined" 
                        style={
                            { width: '24px',
                              height: '24px',
                              color: 'var(--md-sys-color-on-secondary-container)'
                            }}>{element || 'add'}</span>)
                }
            </div>

            {
                props.floatingActionButton && (
                    <div
                        style={{
                            backgroundColor: `${props.floatingActionButtonBackgroundColor ?? 'var(--md-sys-color-primary-container)'}`,
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
                        }}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{
                                width: '24px',
                                height: '24px',
                                color: 'var(--md-sys-color-on-primary-container)'
                            }}
                        >
                            {props.floatingActionButtonIcon || 'add'}
                        </span>
                    </div>
                )

            }
        </div>
    );
};
