export type Cta = {
    _type: 'cta';
    _key: string;
    displayText: string;
    url: string;
    linkType: 'internal' | 'external';
    openInNewTab: boolean;
    verticalAlignment: 'top' | 'center' | 'bottom';
    horizontalAlignment: 'left' | 'center' | 'right';
};