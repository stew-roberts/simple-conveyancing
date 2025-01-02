import { TimelineItem } from "./TimelineItem";

export type Timeline = {
    _type: 'timeline';
    _key: string;
    title: string;
    strapline: string;
    items: TimelineItem[];
};