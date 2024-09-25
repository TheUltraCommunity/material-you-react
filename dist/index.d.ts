import React from 'react';

type BottomAppBarProps = {
    backgroundColor?: string;
    items: string[];
    floatingActionButton: boolean;
    floatingActionButtonBackgroundColor: string;
    floatingActionButtonIcon?: string;
};
declare function BottomAppBar(props: BottomAppBarProps): React.JSX.Element;

type ElevatedButtonProps = {
    children: React.ReactNode;
    icon?: string;
    disabled?: boolean;
};
declare const ElevatedButton: (props: ElevatedButtonProps) => React.JSX.Element;

export { BottomAppBar, ElevatedButton };
