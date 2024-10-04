// TODO: Scrolling logic need to be implemented.

import React, { useState, useEffect } from "react";
import { Divider } from "../Divider";
import { TabContext } from "./TabContext";

type TabProps = {
    children: React.ReactNode
}

/**
 * A Tab Component used for moving from one page to another.
 *
 * `TabPrimary` | `TabSecondary` are accepted as children.
 */

export default function Tab(props: TabProps) {
    const [activeTabId, setActiveTabId] = useState<string | null>(null);

    const findInitialActiveTab = () => {
        const activeTab = React.Children.toArray(props.children).find(
            (child) => (child as any).props.active === true
        );

        if(activeTab){
            setActiveTabId((activeTab as any).props.label)
        }
    };

    useEffect(() => {
        findInitialActiveTab();
    }, []);

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
                <div style={{ display: "flex", width: "100vw", overflowX: 'auto' }}>
                    <TabContext.Provider value={{ activeTabId, setActiveTabId }}>
                        {props.children}
                    </TabContext.Provider>
                </div>           
            </div>

            <Divider type="horizontal" variant="fullWidth" />
        </div>
    );
};
