type TabsDefaultProps = {
    label: string;
    badge?: string;
    active?: boolean;
}

export type PrimaryProps = TabsDefaultProps & { icon : string };

export type SecondaryProps = TabsDefaultProps;
