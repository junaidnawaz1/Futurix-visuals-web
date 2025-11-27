import { useEffect, useRef } from "react";
import { Mail, Instagram, Twitter, ArrowRight, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Linkedin as BehanceIcon } from "lucide-react";

export default function Footer() {
  const marqueeRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    // Perfect infinite marquee - no breaks
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        x: "-100%", // Move exactly one full width
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % 100) // Creates seamless loop
        }
      });
    }

    // Enhanced arrow animation
    if (arrowRef.current) {
      gsap.to(arrowRef.current, {
        x: 8,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        repeatDelay: 0.1
      });
    }
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  // Handle email click - prevent new tab opening
  
  // Social links data
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:futurixvisuals@gmail.com",
      color: "hover:text-purple-400",
      target: null, // No target for email
      rel: null // No rel for email
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/futurixvisuals?igsh=OG9tNzQ1aDV5OHV2",
      color: "hover:text-pink-400",
      onClick: null,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: BehanceIcon,
      label: "Behance",
      href: "https://www.behance.net/futurixvisuals",
      color: "hover:text-blue-400",
      onClick: null,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      href: "https://x.com/futurixvisuals?t=V7JEzZ3-OEEHJLAWpKzw3A&s=09",
      color: "hover:text-blue-300",
      onClick: null,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/923322044474",
      color: "hover:text-green-400",
      onClick: null,
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  return (
    <footer 
      className="w-screen md:font-serif min-h-screen bg-[#1A1A1A] text-white relative overflow-hidden flex flex-col rounded-t-[3rem] md:rounded-t-[4rem]"
      style={{ 
        margin: 0,
        padding: 0,
        left: 0,
        right: 0,
        width: '100vw'
      }}
    >
      
      {/* Main Content - Centered CTA */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-16 md:py-24 relative z-10 w-full">
        <div className="text-center w-full max-w-4xl mx-auto">
          
          {/* Subheading */}
          <h2 className="text-gray-400 text-sm md:text-4xl font-semibold mb-3 md:mb-4 tracking-widest uppercase">
            LET'S GET THE PARTY
          </h2>

          {/* Main Heading */}
          <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-10 md:mb-16 leading-[0.9] tracking-tight">
            STARTED
          </h1>

          {/* CTA Button with enhanced animated arrow */}
          <motion.button
            onClick={handleContactClick}
            className="group relative inline-flex hover:text-white items-center gap-6 px-12 py-6 rounded-full bg-purple-500 hover:bg-purple-300 text-black font-bold text-lg md:text-xl transition-all duration-300 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="relative z-10 flex items-center">
              <ArrowRight 
                ref={arrowRef}
                size={26} 
                className="transition-all  group-hover:scale-125" 
              />
            </div>
            
            {/* Button hover effect */}
            <div className="absolute inset-0  bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </motion.button>
        </div>
      </div>

      {/* Marquee Background Text - PERFECT INFINITE LOOP */}
      <div className="absolute bottom-40 left-0 w-full h-32 pointer-events-none z-20 overflow-hidden">
        <div className="relative w-full h-full">
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap font-black opacity-[0.08] absolute top-0 left-0"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 8rem)",
              color: "#fff",
              lineHeight: 1,
              whiteSpace: 'nowrap'
            }}
          >
            {/* More copies for seamless loop */}
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
            <span className="pr-6 md:pr-10">THE FUTURIX VISUALS</span>
          </div>
        </div>
      </div>

      {/* Bottom Section Container */}
      <div className="pointer-events-auto mt-auto relative z-10 bg-[#1A1A1A] w-full border-t border-gray-800/50 pt-32">

        
        {/* Social Links & Email */}
        <div className="w-full py-8 md:py-10 px-6 md:px-8">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-400">
            
            {/* Social Links - Left aligned on desktop */}
            <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href}
                  onClick={social.onClick || undefined}
                  target={social.target || undefined}
                  rel={social.rel || undefined}
                  className={`flex items-center gap-3 text-base md:text-lg transition-all duration-300 hover:scale-105 ${social.color}`}
                >
                  <social.icon size={20} /> 
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            {/* Email - Right aligned on desktop */}
         <a
  href="mailto:futurixvisuals@gmail.com"
  className="relative z-[50] flex items-center gap-3 text-base md:text-lg hover:text-purple-400 transition-all duration-300 hover:scale-105 font-medium"
>


              <Mail size={20} /> 
              <span>futurixvisuals@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Copyright & Studio Info */}
        <div className="w-full border-t border-gray-800/30 py-6 md:py-8 px-6 md:px-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
            
            {/* Copyright */}
            <p className="text-xs md:text-sm text-center">
              Copyright © {new Date().getFullYear()} The Futurix Visuals — All Rights Reserved.
            </p>

            {/* Empty div for flex spacing */}
            <div className="hidden md:block w-20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}