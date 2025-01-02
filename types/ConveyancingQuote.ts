import { PortableTextBlock } from 'sanity';

export type ConveyancingQuote = {
    _id: string;
    _type: 'conveyancingQuote';
    _createdAt: Date;
    title?: string;
    description?: PortableTextBlock[];
}