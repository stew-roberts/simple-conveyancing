import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PostsType } from "@cms/types";

type PostGridProps = {
  posts: PostsType[];
};

const PostList: React.FC<PostGridProps> = ({ posts }) => {
    

  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500 m-12">There are currently no posts available.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
            <article
            key={post._id}
            className="border rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition"
            >
            {post.image && (
                <div className="relative w-full h-48">
                <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
                </div>
            )}
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                <Link href={`/post/${post.slug}`} className="hover:underline">
                    {post.title}
                </Link>
                </h2>
                {post.subtitle && (
                <p className="text-sm text-gray-500 mb-1">{post.subtitle}</p>
                )}
                {post.summary && (
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {post.summary}
                </p>
                )}
                {post.author?.name && (
                <p className="text-xs text-gray-400">By {post.author.name}</p>
                )}
            </div>
            </article>
        ))}
        </div>
    </div>
  );
};

export default PostList;