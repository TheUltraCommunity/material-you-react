import React from 'react';

type ElevatedButtonProps = {
    children: React.ReactNode;
    icon?: string;
    disabled?: boolean;
};
declare const ElevatedButton: (props: ElevatedButtonProps) => React.JSX.Element;

export { ElevatedButton };
