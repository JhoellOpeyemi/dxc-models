"use client";

import { getSplitText } from "@/utils";

interface SplitTextProps {
  text: string;
  splitType: "words" | "chars" | "words, chars";
}

const SplitText = ({ text, splitType }: SplitTextProps) => {
  const splitTextArray = getSplitText(text, splitType);

  if (splitType === "words, chars") {
    return (
      <>
        {(splitTextArray as string[][]).map((word, wordIndex) => (
          <span key={wordIndex} className="word">
            {word.map((char, charIndex) => (
              <span key={charIndex} className="char">
                {char}
              </span>
            ))}
          </span>
        ))}
      </>
    );
  } else {
    return (
      <>
        {(splitTextArray as string[]).map((part, index) => (
          <span
            key={index}
            className={`${splitType === "words" ? "word" : "char"}`}
          >
            {part}
          </span>
        ))}
      </>
    );
  }
};

export default SplitText;
