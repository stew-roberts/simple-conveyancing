import { PortableTextBlock } from "sanity";

export type TextOnly = {
    _id: string;
    _type: 'textOnly';
    _createdAt: Date;
    title?: string;
    content?: PortableTextBlock[];
}