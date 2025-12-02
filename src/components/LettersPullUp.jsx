import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function LettersPullUp({ text, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const pullup = {
    initial: { y: 20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.04 }
    })
  };

  const chars = text.split("");

  return (
    <div ref={ref} className="flex flex-wrap font-sans leading-tight">
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          variants={pullup}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={className}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </div>
  );
}
