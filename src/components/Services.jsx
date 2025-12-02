import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { LettersPullUp } from './LettersPullUp';

// Import image only (videos moved to YouTube)
import imageCard3 from '../assets/image-card3.jpg';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [playingVideos, setPlayingVideos] = useState({});

  // Services data with image for 3rd card
  const services = [
    {
      id: 1,
      title: "E-Com",
      description: "Annotations that work anywhere – social media, TV, Billboards, you name it. Designed to be sharp, eye-catching, and tailored to your brand.",
      video: "https://www.youtube.com/embed/e_g-wKijkqI?autoplay=1&mute=1&loop=1&playlist=e_g-wKijkqI&controls=0&modestbranding=1&rel=0&showinfo=0",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Animations",
      description: "Bring your ideas to life with stunning animations that captivate your audience and elevate your brand storytelling.",
      video: "https://www.youtube.com/embed/MH-uDQtpU5U?autoplay=1&mute=1&loop=1&playlist=MH-uDQtpU5U&controls=0&modestbranding=1&rel=0&showinfo=0",
      category: "Motion Graphics"
    },
    {
      id: 3,
      title: "Websites & App Motion",
      description: "Interactive motion design for digital platforms that enhances user experience and engagement.",
      image: imageCard3,
      category: "UI/UX Motion"
    },
    {
      id: 4,
      title: "For Mixed Reality & CGI",
      description: "High-quality product visuals and 3D renders that showcase your products in the best light possible.",
      video: "https://www.youtube.com/embed/vuxbtskDnJw?autoplay=1&mute=1&loop=1&playlist=vuxbtskDnJw&controls=0&modestbranding=1&rel=0&showinfo=0",
      category: "Mixed Reality & CGI"
    }
  ];

  const handleVideoPlay = (id, e) => {
    e.stopPropagation();
    setPlayingVideos(prev => ({ 
      ...prev, 
      [id]: !prev[id] 
    }));
  };

  return (
    <section id="services-section" className="min-h-screen font-sans bg-[#f5f5f5] text-black py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <LettersPullUp
            text="SERVICES"
            className="text-4xl md:text-8xl font-bold mb-4"
          />
         
          <p className="text-start text-black text-lg md:text-xl  mx-auto">A curated set of services crafted to elevate your visuals – clean, effective, and made for impact.</p>
        </motion.div>

        {/* Services Grid - 4 CARDS IN ONE LINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Video/Image Card */}
              <div className="aspect-[3/4] bg-gray-900 rounded-xl overflow-hidden relative border border-gray-700">
                
                {/* Show image for 3rd card, YouTube for others */}
                {service.image ? (
                  // Image for 3rd card
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // YouTube for other cards
                  <div className="w-full h-full relative">
                    <iframe
                      src={service.video}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{ pointerEvents: 'none' }}
                    />
                    {/* Dark Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                )}
                
                {/* Dark Overlay - Always visible but lighter on hover */}
                <div className={`absolute inset-0 transition-all duration-500 ${
                  hoveredCard === service.id ? 'bg-black/20' : 'bg-black/40'
                }`} />
                
                {/* Category Tag - TOP POSITION */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-purple-600/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-purple-400/30">
                    <p className="text-white text-xs font-medium tracking-wide">
                      {service.category}
                    </p>
                  </div>
                </div>

                {/* Play/Pause Button - Only show for video cards */}
                {service.video && (
                  <button
                    onClick={(e) => handleVideoPlay(service.id, e)}
                    className="absolute top-3 right-3 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors z-20 border border-white/20"
                  >
                    {playingVideos[service.id] ? (
                      <Pause size={14} className="text-white" />
                    ) : (
                      <Play size={14} className="text-white ml-0.5" />
                    )}
                  </button>
                )}

                {/* Title - Bottom Position */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description - Show on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 flex items-end z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === service.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t-4 border-b-4 pb-12 border-dashed border-purple-800 pt-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Why Choose Us?
            </h3>
            
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-base leading-relaxed">
                    <strong className="text-white">Annotations that work anywhere</strong> – social media, TV, Billboards, you name it. Designed to be sharp, eye-catching, and tailored to your brand.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-base leading-relaxed">
                    <strong className="text-white">Custom motion design</strong> that aligns perfectly with your brand identity and marketing goals.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-base leading-relaxed">
                    <strong className="text-white">Fast turnaround times</strong> without compromising on quality or attention to detail.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;