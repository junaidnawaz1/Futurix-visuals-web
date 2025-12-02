import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotateWords({
  text = "",
  words = ["Word 1", "Word 2", "Word 3"],
  interval = 3000,
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const int = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(int);
  }, []);

  return (
    <div className="flex items-center text-6xl font-sans md:text-[170px] font-extrabold tracking-tight gap-2 text-purple-600">
      {text}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="text-lime-300 text-purple-600"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
