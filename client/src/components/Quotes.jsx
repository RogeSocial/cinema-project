import "../styles/home.css";
import "../styles/quotes.css";
import React, { useEffect, useState } from "react";
import { quoteArray } from "./QuoteData.js";

export default function () {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * quoteArray.length)
  );
  const animationRef = React.createRef();

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.addEventListener(
        "animationiteration",
        handleIteration
      );

      return () => {
        if (animationRef.current) {
          animationRef.current.removeEventListener(
            "animationiteration",
            handleIteration
          );
        }
      };
    }
  }, [animationRef]);

  const handleIteration = (event) => {
    setIndex(Math.floor(Math.random() * quoteArray.length));
  };

  let movieQuote = quoteArray[index].quote;
  let byline = quoteArray[index].quoteSource;

  return (
    <h2 id="quote-text-container" className={"quote-background quotebox"}>
      <div ref={animationRef} className={"quote fading"}>
        {movieQuote}
      </div>
      <div className={"byline fading"}>{byline}</div>
    </h2>
  );
}
