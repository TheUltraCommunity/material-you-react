import React from "react";
import { Divider } from "../Divider";

type TabProps = {
    children: React.ReactNode
}

export default function Tab(props: TabProps) {
    return (

        <div
            style={{
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgb(var(--md-sys-color-surface))',
                    width: '100vw',
                    maxHeight: '64px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    overflowX: 'hidden',
                }}
            >
                <div style={{ display: "flex", width: "100%" }}>
                    {props.children}
                </div>           
            </div>

            <Divider type="horizontal" variant="fullWidth" />
        </div>
    );
};
