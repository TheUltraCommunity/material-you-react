import React from "react";

type MaterailImageProps = {
    children: React.ReactNode;
};

export default function MaterialImage(props: MaterailImageProps) {
    return (
        <div
            style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {props.children}
        </div>
    );
};
