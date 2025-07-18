import { PortableTextBlock } from "@portabletext/types";

export type PostsType = {
    _type: "posts";
    _id: string;
    _createdAt: string;
    title: string;
    slug: { _type: "slug"; current: string };
    author: {
        _type: "author";
        name: string;
    };
    categories: {
        _type: "category";
        title: string;
        description?: string;
    }[];
    subtitle?: string;
    summary?: string;
    body: PortableTextBlock[];
    image: string;
}