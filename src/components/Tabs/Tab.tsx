// TODO: Scrolling logic need to be implemented.

import React, { useState, useEffect, useRef } from "react";
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
    const [requiredWidth, setRequiredWidth] = useState<string>('90px');
    const [containerWidth, setContainerWidth] = useState<string>('fit-content');
    const tabContainerRef = useRef<HTMLDivElement>(null);

    const findInitialActiveTab = () => {
        const activeTab = React.Children.toArray(props.children).find(
            (child) => (child as any).props.active === true
        );

        if(activeTab){
            setActiveTabId((activeTab as any).props.label)
        }
    };

    useEffect(() => {
        const totalNumberofChildren = React.Children.toArray(props.children).length;
        const presentWindowWidth = window.innerWidth;
        const calculatedRequiredWidth = totalNumberofChildren > 3 ? 90 : 120;
        const calculatedContainerWidth = presentWindowWidth > (totalNumberofChildren * calculatedRequiredWidth) ? '100%' : 'fit-content';
        setContainerWidth(calculatedContainerWidth)
        setRequiredWidth(calculatedRequiredWidth + 'px');
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
                ref={tabContainerRef}
                style={{
                    backgroundColor: 'rgb(var(--md-sys-color-surface))',
                    width: '100vw',
                    maxHeight: '64px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    overflowX: 'auto',
                    
                }}
                className="scroll-container"
            >
                <div 
                    style={{ 
                        display: "flex", 
                        width: containerWidth,
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                        flexShrink: 0,  
                    }}
                >
                    <TabContext.Provider value={{ activeTabId, setActiveTabId, requiredWidth }}>
                        {props.children}
                    </TabContext.Provider>
                </div>           
            </div>

            <Divider type="horizontal" variant="fullWidth" />
        </div>
    );
};
