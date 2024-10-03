type TabsDefaultProps = {
    label: string;
    badge?: number;
    active?: boolean;
}

export type PrimaryProps = TabsDefaultProps & { icon : string };

export type SecondaryProps = TabsDefaultProps;
