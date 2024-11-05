type TabsDefaultProps<T = void> = {
    label: string;
    badge?: string;
    active?: boolean;
    onClickCallback: (params : T) => void;
}

export type PrimaryProps<T = void> = TabsDefaultProps<T> & { icon : string };

export type SecondaryProps<T = void> = TabsDefaultProps<T>  & { icon? : string };
