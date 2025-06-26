import React from "react";
import { PortableText, PortableTextBlock } from "@portabletext/react";

type ConveyancingQuote = {
  _type: "conveyancingQuote";
  title?: string;
  description?: PortableTextBlock; 
};

type Props = {
  quote: ConveyancingQuote;
};

const ConveyancingQuoteDisplay: React.FC<Props> = ({ quote }) => {
  if (!quote) {
    return null; // Handle missing quote gracefully
  }

  const { title, description } = quote;

  return (
    <div className="conveyancing-quote">
      {title && <h2 className="quote-title">{title}</h2>}
      {description && (
        <div className="quote-description">
          <PortableText value={description} />
        </div>
      )}
    </div>
  );
};

export default ConveyancingQuoteDisplay;