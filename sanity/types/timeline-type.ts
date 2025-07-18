export type TimelineItemType = {
  _type: "timelineItem";
  title: string
  dateRange?: string;
  location?: string;
  description: string;
};

export type TimelineType = {
  _type: "timeline";
  title: string;
  strapline?: string;
  items: TimelineItemType[];
};