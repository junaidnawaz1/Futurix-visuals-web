import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";   
import { HeroLettersPullUp } from "./HeroTextAnimation";

const WorkSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);

  const sectionRef = useRef(null);
  const rightRef = useRef(null);
  const tlRef = useRef(null);

  const workItems = [
    {
      id: 1,
      title: "SUMMER SIP SERIES",
      category: "Social Media • Animation",
      image: card1,
      description: "A vibrant social media animation series for summer beverage campaigns",
    },
    {
      id: 2,
      title: "PRODUCT SHOWCASE",
      category: "E-commerce • 3D",
      image: card2,
      description: "Interactive 3D product visualization for e-commerce platforms",
    },
    {
      id: 3,
      title: "BRAND IDENTITY",
      category: "Visual Design • Motion",
      image: card3,
      description: "Complete brand identity with motion graphics and visual elements",
    },
  ];

  /* ---------------------- Custom Cursor Logic ---------------------- */
  useEffect(() => {
    const move = (e) => setCursorPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* ---------------------- Updated GSAP ScrollTrigger Logic ---------------------- */
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = sectionRef.current;
    const right = rightRef.current;
    if (!container || !right) return;

    // Cleanup previous instances
    if (tlRef.current) {
      tlRef.current.kill();
    }
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Check if screen is mobile (less than 1024px)
    const isMobile = window.innerWidth < 1024;

    const updateAnimation = () => {
      const viewportHeight = window.innerHeight;
      const rightHeight = right.scrollHeight;
      const scrollDistance = Math.max(0, rightHeight - viewportHeight + 40);

      // Only apply scroll effect for desktop/tablet (lg screens and above)
      if (!isMobile && scrollDistance > 0) {
        tlRef.current = gsap.to(right, {
          y: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${scrollDistance + viewportHeight}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
      // For mobile, we don't create any GSAP animation - it will scroll naturally
    };

    updateAnimation();

    // Handle resize - reinitialize on screen size changes
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (tlRef.current) tlRef.current.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#f5f5f5] font-sans text-white py-16 md:py-24 px-4 md:px-12 relative overflow-hidden"
    >
      {/* CUSTOM PURPLE CURSOR - Hidden on mobile */}
      <motion.div
        className="fixed z-50 pointer-events-none hidden md:block"
        animate={{
          x: cursorPosition.x - 35,
          y: cursorPosition.y - 35,
          scale: cursorVisible ? 1 : 0,
          opacity: cursorVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <div className="w-20 h-20 md:w-28 md:h-28 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl border border-purple-300">
          <span className="text-white font-bold text-sm md:text-lg">{cursorText}</span>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[900px] lg:gap-12 items-start">
          {/* LEFT */}
          <div className="lg:pr-8">
            <h2 className="text-4xl text-black sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-8 leading-tight">
              SELECTED
              <br />
              <span className="text-purple-600">WORK</span>
            </h2>

            <p className="text-black text-base md:text-xl font-normal mb-6 md:mb-12 max-w-md">
              Explore our curated selection of innovative projects that showcase
              our skills in 3D animation and digital design.
            </p>
         

           <button 
  onClick={() => window.location.href = '/projects'}
  className="
    group 
    flex 
    items-center 
    justify-center
    font-sans
    gap-3 
    md:gap-4 
    py-3 
    px-8
    md:py-4 
    md:px-10
    text-base 
    md:text-lg
    font-['PP_Mori'] 
    font-semibold 
    text-black
    bg-transparent
    border-2 
    border-black
    rounded-full
    transition-all
    duration-300
    hover:bg-purple-500
    hover:text-white
    hover:border-purple-500
  "
>
  <span className="transition-colors duration-300">
    View all
  </span>
  
  <ArrowRight 
    size={20} 
    className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-colors duration-300" 
  />
</button>
          </div>

          {/* RIGHT - Stack vertically on mobile, scroll on desktop */}
         <div ref={rightRef} className="space-y-6 md:space-y-10">
  {workItems.map((item) => (
    <div key={item.id} className="relative group">
      {/* Card - Only image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="cursor-pointer overflow-hidden rounded-2xl md:rounded-2xl w-full lg:max-w-[400px] md:max-w-xs mx-auto"
        onMouseEnter={() => {
          setCursorText("Take a Look");
          setCursorVisible(true);
          setHoveredCard(item.id);
        }}
        onMouseLeave={() => {
          setCursorVisible(false);
          setHoveredCard(null);
        }}
        onClick={() => {
          if (window.innerWidth < 1024) {
            console.log("Project clicked on mobile:", item.title);
          }
        }}
      >
        {/* Less vertical image ratio */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Title and Category below - Compact */}
     <div className="mt-3 text-center justify-center items-center ">
  {/* Title on the left */}
  <h3 className="text-lg md:text-xl font-bold text-black">
    {item.title}
  </h3>
  
  {/* Category badge on the right with purple background */}
  <div className="inline-flex items-center bg-purple-600 px-3 py-1 rounded-full">
    <span className="text-white text-xs font-medium">
      {item.category}
    </span>
  </div>
</div>
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;