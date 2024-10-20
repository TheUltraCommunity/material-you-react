type ListProps<T = void> = {
    onClickCallback: (params: T) => void;
    headline?: string;
    trailingSupportingText?: string;
    leadingIcon?: string;
    trailingIcon?: string;
    leadingAvatarLabel?: string;
    children?: React.ReactNode;
    divider?: React.ReactNode;
    disable?: boolean;
};

export type OneListProps<T = void> = ListProps<T>;
export type TwoListProps<T = void> = ListProps<T> & { supportingText: string; };