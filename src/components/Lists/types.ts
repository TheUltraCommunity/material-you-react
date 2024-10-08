<<<<<<< HEAD
type ListProps<T = void> = {
    onClickCallback: (params: T) => void;
    headline?: string;
=======
type ListProps = {
    headline?: string;
    supportingText?: string;
>>>>>>> c8f5e87 (Added `One-line-list` to Lists)
    trailingSupportingText?: string;
    leadingIcon?: string;
    trailingIcon?: string;
    leadingAvatarLabel?: string;
    children?: React.ReactNode;
    divider?: React.ReactNode;
<<<<<<< HEAD
    disable?: boolean;
};

export type OneListProps<T = void> = ListProps<T>;
export type TwoListProps<T = void> = ListProps<T> & { supportingText: string; };
=======
    disable?: boolean
};

export default ListProps;
>>>>>>> c8f5e87 (Added `One-line-list` to Lists)
