import { PortableTextBlock } from "next-sanity";

export type TimelineItem = {
    _type: 'timelineItem';
    _key: string;
    title: string;
    description: PortableTextBlock[];
    dateRange: string;
    location: string;
};