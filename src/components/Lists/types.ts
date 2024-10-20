type ListProps = {
    headline?: string;
    trailingSupportingText?: string;
    leadingIcon?: string;
    trailingIcon?: string;
    leadingAvatarLabel?: string;
    children?: React.ReactNode;
    divider?: React.ReactNode;
    disable?: boolean
};

export type OneListProps = ListProps;
export type TwoListProps = ListProps & { supportingText: string; };