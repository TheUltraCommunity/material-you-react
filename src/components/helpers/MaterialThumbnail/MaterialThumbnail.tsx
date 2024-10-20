import React from "react";

type MaterialThumbnailProps = {
    children: React.ReactNode;
};

export default function MaterialThumbnail(props:MaterialThumbnailProps) {
    return(
        <div
            style={{
                width: '64px',
                height: '100%',
                objectFit: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {props.children}    
        </div>
    );    
};
