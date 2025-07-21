"use client";
import React, { useEffect } from "react";
import { ConveyancingQuoteType } from "@sanity/types";
import TextOnly from "./TextOnly";

type Props = {
  quote: ConveyancingQuoteType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tcnConfig: any
};

const ConveyancingQuoteDisplay: React.FC<Props> = ({ tcnConfig, quote }) => {
  useEffect(() => {
    // Define the global config for TCN before loading the script
    window.tcnconfig = {
      license: tcnConfig.licence,
      container: "conveyancing-quotes",
    };

    // Dynamically add the script tag only once
    if (!document.getElementById("tcn-script")) {
      const tcnjs = document.createElement("script");
      tcnjs.id = "tcn-script";
      tcnjs.type = "text/javascript";
      tcnjs.async = true;
      tcnjs.src =
        "https://conveyancing.tcn-online.com/engine.min.js?" + Math.random();

      // Optional: add an event listener for load to confirm script loaded
      tcnjs.onload = () => {
        console.log("TCN script loaded");
      };

      document.body.appendChild(tcnjs);
    }

    // Cleanup if needed on unmount
    return () => {
      const script = document.getElementById("tcn-script");
      if (script) script.remove();
    };
  }, [tcnConfig.licence]);

  if (!quote) return null;

  const { title, description } = quote;

  return (
    <div>
      { description && <TextOnly title={title} text={quote.description} /> }
      <div id="conveyancing-quotes"></div>
    </div>
  );
};

export default ConveyancingQuoteDisplay;