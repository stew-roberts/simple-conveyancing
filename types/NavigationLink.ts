export type NavigationLink = {
    _type: 'cta';
    _key: string;
    displayText: string;
    linkType: 'internal' | 'external';
    internalLink?: {
        _type: 'reference';
        _key: string;
        _ref: string;
    };
    url?: string;
    openInNewTab: boolean;
    icon?: string;
    subLinks?: NavigationLink[];
};