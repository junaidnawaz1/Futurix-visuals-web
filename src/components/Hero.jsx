import React, { useEffect, useRef, useState } from "react";
import { RotateWords } from "./RotateWords";
import { LettersPullUp } from "./LettersPullUp";
import ShowreelButton from "./ShowreelButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const arrowRef1 = useRef(null);
  const arrowRef2 = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (arrowRef1.current) {
      gsap.to(arrowRef1.current, {
        x: 6,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        repeatDelay: 0.2
      });
    }

    if (arrowRef2.current) {
      gsap.to(arrowRef2.current, {
        x: 5,
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        repeatDelay: 0.3
      });
    }

    // Preload YouTube videos
    const preloadVideos = () => {
      const desktopIframe = document.createElement('iframe');
      desktopIframe.style.display = 'none';
      desktopIframe.src = "https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
      const mobileIframe = document.createElement('iframe');
      mobileIframe.style.display = 'none';
      mobileIframe.src = "https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
      document.body.appendChild(desktopIframe);
      document.body.appendChild(mobileIframe);
      
      setTimeout(() => {
        setVideoLoaded(true);
        document.body.removeChild(desktopIframe);
        document.body.removeChild(mobileIframe);
      }, 1000);
    };

    preloadVideos();
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  const handleGetInTouch = (e) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  return (
    <section className="w-full md:font-serif mt-20">
      
      {/* VIDEO CONTAINER */}
      <div className="relative w-[95%] mx-auto rounded-3xl overflow-hidden h-[80vh]">

        {/* Desktop Video */}
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
            className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              pointerEvents: 'none',
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
            onLoad={() => setVideoLoaded(true)}
          />
        </div>

        {/* Mobile Video */}
        <div className="block md:hidden absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
            className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              pointerEvents: 'none',
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
            onLoad={() => setVideoLoaded(true)}
          />
        </div>

        {/* Subtle Loading Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black transition-opacity duration-500"
          style={{ opacity: videoLoaded ? 0 : 1 }}
        />

        <div className="">
          <ShowreelButton video="https://www.youtube.com/embed/HjSpbj8ARGo" />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* LEFT GRADIENT */}
        <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm pointer-events-none" />

        {/* TEXT OVERLAY */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-6 md:px-16 gap-5 text-white z-10">

          <LettersPullUp
            text="We Flare up your"
            className="text-xl md:text-3xl font-light"
          />

          <RotateWords 
            text="" 
            words={["E-com", "Product", "Visuals"]} 
            interval={2000} 
          />

          <LettersPullUp
            text="3D Content & Visuals"
            className="text-lg md:text-2xl opacity-90"
          />

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            {/* BUTTON 1 */}
            <motion.button
              onClick={handleContactClick}
              className="group relative inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 rounded-full bg-purple-500 hover:bg-purple-400 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl overflow-hidden border-2 border-purple-400"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(192, 132, 252, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />

              <span className="relative z-10 font-semibold">Let's Talk</span>
              <div className="relative z-10 flex items-center">
                <ArrowRight 
                  ref={arrowRef1}
                  size={20} 
                  className="transition-transform duration-300 group-hover:scale-110" 
                />
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-purple-300 rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: 1.1,
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
            </motion.button>

            {/* BUTTON 2 */}
            <motion.button
              onClick={handleGetInTouch}
              className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white rounded-full"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />

              <span className="relative z-10">Get in Touch</span>
              <div className="relative z-10 flex items-center">
                <motion.span
                  ref={arrowRef2}
                  className="inline-block text-lg font-bold"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>

              <motion.div
                className="absolute inset-0 border-2 border-white rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: 1.08,
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity
                }}
              />
            </motion.button>

          </div>
        </div>
      </div>

      {/* BOTTOM TEXT SECTION */}
      <div className="w-[95%] mx-auto mt-10 text-white">
        <LettersPullUp
          text="The Futurix Visuals"
          className="text-4xl md:text-6xl lg:text-7xl bg-fuchsia-600 font-bold text-white"
        />

        <LettersPullUp
          text="We are a Creative studio specializing in product launch animations, Scroll Stopping Mixed Reality Videos and web & app UI that make your site feel alive. Our team delivers stunning visuals that captivate your audience and elevate your brand presence across all digital platforms."
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mt-6 max-w-4xl"
        />
      </div>
    </section>
  );
};

export default Hero;