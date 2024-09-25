import React from 'react';

type BottomAppBarProps = {
    backgroundColor?: string;
    items: string[];
    floatingActionButton?: React.ReactNode;
};
declare function BottomAppBar(props: BottomAppBarProps): React.JSX.Element;

type TopAppBarCenterAlignedProps = {
    containerBackgroundColor?: string;
    headline: string;
    leadingIcon?: string;
    trailingIcon?: string;
};
declare function TopAppBarCenterAligned(props: TopAppBarCenterAlignedProps): React.JSX.Element;

type TopAppBarCenterSmallProps = {
    containerBackgroundColor?: string;
    headline: string;
    leadingIcon?: string;
    trailingIcons?: string[];
};
declare function TopAppBarCenterSmall(props: TopAppBarCenterSmallProps): React.JSX.Element;

type TopAppBarCenterMediumProps = {
    containerBackgroundColor?: string;
    headline: string;
    leadingIcon?: string;
    trailingIcons?: string[];
};
declare function TopAppBarCenterMedium(props: TopAppBarCenterMediumProps): React.JSX.Element;

type TopAppBarCenterLargeProps = {
    containerBackgroundColor?: string;
    headline: string;
    leadingIcon?: string;
    trailingIcons?: string[];
};
declare function TopAppBarCenterLarge(props: TopAppBarCenterLargeProps): React.JSX.Element;

type ElevatedButtonProps = {
    children: React.ReactNode;
    icon?: string;
    disabled?: boolean;
};
declare const ElevatedButton: (props: ElevatedButtonProps) => React.JSX.Element;

export { BottomAppBar, ElevatedButton, TopAppBarCenterAligned, TopAppBarCenterLarge as TopAppBarLarge, TopAppBarCenterMedium as TopAppBarMedium, TopAppBarCenterSmall as TopAppBarSmall };
