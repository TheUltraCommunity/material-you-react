import React, { useEffect, useState } from "react";

type MenuProps = {
    children : React.ReactNode;
    displayLimit?: number;
}

/**
 * Props for the Menu component.
 * @params {React.ReactNode} `children` - The content to be rendered inside the menu. Accepts `MenuItem` as a childrens.
 * @params {number} `displayLimit` - Optional. Specifies the maximum number of items to display before enabling scroll.
 *                                    If not provided, the menu will expand to fit all content without scrolling.
*/

export default function Menu(props: MenuProps) {
    const [allowedHeight, setAllowedHeight] = useState<string>('fit-content');
    const [shouldScroll, setShouldScroll] = useState<boolean>(false);

    useEffect(() => {
        if(props.displayLimit){
            const calculatedHeight = props.displayLimit * 48;
            setAllowedHeight(`${calculatedHeight}px`)
            setShouldScroll(true);
        }
    },[props.displayLimit]);

    return(
        <div
            style={{
                width: '200px',
                // minWidth: '112px',
                // maxWidth: '280px',
                backgroundColor: 'rgb(var(--md-sys-color-surface-container))',
                height: allowedHeight,
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                flexDirection: 'column',
                ...(shouldScroll && { overflowY: 'scroll' })
            }}
            className="md-elevation-2"
        >
            {
                props.children
            }
        </div>
    );
};

