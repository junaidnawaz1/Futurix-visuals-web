import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { LettersPullUp } from "../components/LettersPullUp";


// Helper to extract video ID from the base source URL
const getVideoId = (baseSrc) => {
  const match = baseSrc.match(/embed\/(.+)\?/);
  return match ? match[1] : null;
};

// Videos array
const videos = [
  {
    src: "https://www.youtube.com/embed/GGszOSAij1c?",
    title: "E-Commerce Animation",
    desc: "A stunning e-commerce product animation showcasing the features and benefits of our client's product. This animation increased conversion rates by 45% and improved user engagement significantly.",
    category: "E-Commerce • 3D Animation"
  },
  {
    src: "https://www.youtube.com/embed/m6P8nTSJ0Ps?",
    title: "Brand Identity Motion",
    desc: "Complete brand identity motion graphics package that transformed our client's digital presence. This project involved creating cohesive animations across all digital platforms.",
    category: "Branding • Motion Graphics"
  },
  {
    src: "https://www.youtube.com/embed/COXaIaIM_ck?",
    title: "Product Showcase",
    desc: "Interactive product showcase that allows users to explore features in an engaging way. This project helped our client demonstrate complex product features simply and effectively.",
    category: "Product • Interactive"
  },
  {
    src: "https://www.youtube.com/embed/sydTmSdnC8Q?",
    title: "Social Media Campaign",
    desc: "Viral social media animation series that generated over 2 million views across platforms. The campaign successfully increased brand awareness and customer engagement.",
    category: "Social Media • Campaign"
  },
  {
    src: "https://www.youtube.com/embed/3csypTKYTXA?",
    title: "Architectural Visualization",
    desc: "Realistic architectural visualization that brings building designs to life. This project helped our client secure important contracts by showcasing their vision effectively.",
    category: "Architecture • 3D"
  },
  {
    src: "https://www.youtube.com/embed/UumTVf1VIgc?",
    title: "UI/UX Animation",
    desc: "Smooth and intuitive UI/UX animations that enhance user experience and improve navigation flow. These micro-interactions made the digital product feel premium and responsive.",
    category: "UI/UX • Interaction"
  },
  {
    src: "https://www.youtube.com/embed/WtIw6bpjvdk?",
    title: "Product Launch Video",
    desc: "Exciting product launch video that created buzz and anticipation in the market. The animation successfully communicated the product's unique value proposition.",
    category: "Launch • Marketing"
  },
  {
    src: "https://www.youtube.com/embed/j0yGc3J_Q20?",
    title: "Corporate Presentation",
    desc: "Professional corporate presentation animation that simplified complex business concepts. This helped our client communicate effectively with stakeholders and investors.",
    category: "Corporate • Business"
  },
  {
    src: "https://www.youtube.com/embed/UltskLI2WBU?",
    title: "Educational Content",
    desc: "Engaging educational animations that make learning complex topics enjoyable and accessible. This project improved knowledge retention and student engagement.",
    category: "Education • Learning"
  },
  {
    src: "https://www.youtube.com/embed/S06MJdUMZcA?",
    title: "Medical Visualization",
    desc: "Accurate medical animations that explain complex procedures and biological processes. These visuals helped healthcare professionals communicate with patients effectively.",
    category: "Medical • Scientific"
  },
  {
    src: "https://www.youtube.com/embed/3_iBiMiW-hE?",
    title: "Fashion Campaign",
    desc: "High-fashion animation campaign that showcased clothing collections in a dynamic and artistic way. This project elevated the brand's visual identity significantly.",
    category: "Fashion • Artistic"
  },
  {
    src: "https://www.youtube.com/embed/3_iBiMiW-hE?",
    title: "Tech Product Demo",
    desc: "Technical product demonstration that highlights innovative features and user benefits. This animation helped our client explain complex technology in simple terms.",
    category: "Technology • Demo"
  }
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openModal = (video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'unset';
  };

  /**
   * MODAL VIDEO SOURCE - Optimized to hide YouTube UI
   */
  const getModalVideoSrc = (baseSrc) => {
    const videoId = getVideoId(baseSrc);
    // Enhanced parameters to hide all YouTube UI elements
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&disablekb=1&fs=1`;
  }
  
  /**
   * GRID IMAGE SOURCE (Static Thumbnail)
   */
  const getGridThumbnailSrc = (baseSrc) => {
    const videoId = getVideoId(baseSrc);
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  }

  return (
    <div className="w-full min-h-screen bg-White text-black relative py-20 px-4 md:px-8">
      
      {/* Custom Purple Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 45,
          y: cursorPosition.y - 45,
          scale: cursorVisible ? 1 : 0,
          opacity: cursorVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-28 h-28 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-purple-400">
          <span className="text-white font-bold text-base tracking-wide">
            {cursorText}
          </span>
        </div>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="max-w-6xl mx-auto">
          <LettersPullUp
            text="OUR PROJECTS"
            className="text-4xl md:text-6xl font-sans font-bold mb-6 text-black"
          />
        
          {/* <LettersPullUp
            text="Explore our portfolio of stunning 3D animations and visual experiences"
            className="ext-gray-400 text-lg md:text-2xl max-w-2xl"
          /> */}
        </div>
        <p className="text-purple-600 text-lg md:text-2xl mx-auto">
          Explore our portfolio of stunning 3D animations and visual experiences
        </p>
      </motion.div>

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, index) => {
            const isSingle = (index + 1) % 3 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true }}
                className={
                  isSingle
                    ? "col-span-1 md:col-span-2 w-full h-[55vh] md:h-[70vh] overflow-hidden rounded-3xl relative group cursor-pointer border border-purple-700/30 bg-black/50"
                    : "w-full h-[45vh] md:h-[60vh] overflow-hidden rounded-3xl relative group cursor-pointer border border-purple-700/30 bg-black/50"
                }
                onClick={() => openModal(video)}
                onMouseEnter={() => {
                  setCursorText("Take a Look");
                  setCursorVisible(true);
                }}
                onMouseLeave={() => setCursorVisible(false)}
              >
                <div className="w-full h-full relative">
                  <img
                    src={getGridThumbnailSrc(video.src)}
                    alt={video.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-400">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0.6 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50"
                    >
                        <Play className="w-10 h-10 fill-white text-white" />
                    </motion.div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {video.title}
                  </h3>

                  <div className="flex justify-start">
                    <div
                      className="inline-block px-3 py-1.5 rounded-full 
                                  border border-purple-500 
                                  bg-purple-600/20 
                                  group-hover:bg-purple-600/40 transition-colors"
                    >
                      <p className="text-purple-300 text-sm font-medium">
                        {video.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL - Optimized YouTube Embed */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gray-900 rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Title and Close Button */}
              <div className="flex justify-between items-start p-6 md:p-8 border-b border-gray-800">
                <div className="flex-1 pr-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {activeVideo.title}
                  </h2>
                  <p className="text-purple-400 text-sm md:text-base">
                    {activeVideo.category}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-900/90 backdrop-blur 
                                  hover:bg-gray-800 transition-colors flex items-center justify-center flex-shrink-0"
                >
                  <X className="text-white w-7 h-7 md:w-8 md:h-8" />
                </button>
              </div>
      
              {/* Content - Video Section */}
              <div className="flex flex-col h-[calc(85vh-120px)]">
                {/* Video Container - ZOOMED to hide YouTube UI */}
                <div className="flex-1 p-4 md:p-6 min-h-0">
                  <div className="bg-black rounded-2xl overflow-hidden h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <iframe
                        src={getModalVideoSrc(activeVideo.src)}
                        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 object-cover"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div className="p-4 md:p-6 border-t border-gray-800">
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {activeVideo.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}