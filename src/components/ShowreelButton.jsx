import React from "react";
import { motion } from "framer-motion";

const ShowreelButton = ({ video }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="fixed md:absolute bottom-6 right-6 z-30"
    >
      <button
        className="bg-white text-black flex items-center gap-3 px-4 py-2 rounded-2xl shadow-xl border border-black/10 hover:bg-gray-100 transition"
        onClick={() => window.open(video, "_blank")}
      >
        {/* Thumbnail Play Icon */}
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/10 flex items-center justify-center">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col text-left leading-tight">
          <span className="font-semibold">Watch</span>
          <span className="text-sm opacity-70 -mt-1">Showreel</span>
        </div>
      </button>
    </motion.div>
  );
};

export default ShowreelButton;
