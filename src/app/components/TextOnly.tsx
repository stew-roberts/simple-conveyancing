"use client";

import React from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/react";

type TextOnlyProps = {
  title: string;
  text: PortableTextBlock[];
};

const TextOnly: React.FC<TextOnlyProps> = ({ title, text }) => {
  return (
    <section className="text-only-section py-6 px-4 my-10">
      <div className="container mx-auto px-4">
        {title && <h2 className="text-5xl mb-4">{title}</h2>}
        {text && (
          <div className="prose max-w-none">
            <PortableText value={text} />
          </div>
        )}
      </div>
    </section>
  );
};

export default TextOnly;