import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function HeroLettersPullUp({ text, className = "", highlightWords = [] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const pullup = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.002, // FAST speed for hero only
        duration: 0.2,
        ease: "easeOut"
      }
    })
  };

  const words = text.split(' ');

  return (
    <div ref={ref} className={`flex flex-wrap font-sans font-semibold leading-tight ${className}`}>
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightWords.some(highlightWord => 
          word.toLowerCase().includes(highlightWord.toLowerCase())
        );
        
        return (
          <span key={wordIndex} className="inline-flex mr-1">
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                variants={pullup}
                initial="initial"
                animate={isInView ? "animate" : ""}
                custom={wordIndex * 10 + charIndex}
                className={isHighlighted ? "text-purple-600 font-bold font-[400]" : ""}
              >
                {char}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </div>
  );
}