// import React, { useEffect, useRef, useState } from "react";
// import { RotateWords } from "./RotateWords";
// import { LettersPullUp } from "./LettersPullUp";
// import ShowreelButton from "./ShowreelButton";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import gsap from "gsap";

// const Hero = () => {
//   const arrowRef1 = useRef(null);
//   const arrowRef2 = useRef(null);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   useEffect(() => {
//     if (arrowRef1.current) {
//       gsap.to(arrowRef1.current, {
//         x: 6,
//         duration: 0.8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.2
//       });
//     }

//     if (arrowRef2.current) {
//       gsap.to(arrowRef2.current, {
//         x: 5,
//         duration: 0.7,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.3
//       });
//     }

//     // Preload YouTube videos
//     const preloadVideos = () => {
//       const desktopIframe = document.createElement('iframe');
//       desktopIframe.style.display = 'none';
//       desktopIframe.src = "https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       const mobileIframe = document.createElement('iframe');
//       mobileIframe.style.display = 'none';
//       mobileIframe.src = "https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       document.body.appendChild(desktopIframe);
//       document.body.appendChild(mobileIframe);
      
//       setTimeout(() => {
//         setVideoLoaded(true);
//         document.body.removeChild(desktopIframe);
//         document.body.removeChild(mobileIframe);
//       }, 1000);
//     };

//     preloadVideos();
//   }, []);

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     window.location.href = "/contact";
//   };

//   const handleGetInTouch = (e) => {
//     e.preventDefault();
//     window.location.href = "/contact";
//   };

//   return (
//     <section className="w-full md:font-serif mt-20">
      
//       {/* VIDEO CONTAINER */}
//       <div className="relative w-[95%] mx-auto rounded-3xl overflow-hidden h-[80vh]">

//         {/* Desktop Video */}
//         <div className="hidden md:block absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Mobile Video */}
//         <div className="block md:hidden absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Subtle Loading Background */}
//         <div 
//           className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black transition-opacity duration-500"
//           style={{ opacity: videoLoaded ? 0 : 1 }}
//         />

//         <div className="">
//           <ShowreelButton video="https://www.youtube.com/embed/HjSpbj8ARGo" />
//         </div>

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/30"></div>

//         {/* LEFT GRADIENT */}
//         <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm pointer-events-none" />

//         {/* TEXT OVERLAY */}
//         <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-6 md:px-16 gap-5 text-white z-10">

//           <LettersPullUp
//             text="We Flare up your"
//             className="text-xl md:text-3xl font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;"
//           />

//           <RotateWords 
//             text="" 
//             words={["E-com", "Product", "Visuals"]} 
//             interval={2000} 
//           />

//           <LettersPullUp
//             text="3D Content & Visuals"
//             className="text-lg md:text-2xl opacity-90 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: 500;"
//           />

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6">

//             {/* BUTTON 1 */}
//             <motion.button
//               onClick={handleContactClick}
//               className="group relative inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 rounded-full bg-purple-500 hover:bg-purple-400 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl overflow-hidden border-2 border-purple-400"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 30px rgba(192, 132, 252, 0.4)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.4 }}
//               />

//               <span className="relative z-10 font-semibold">Let's Talk</span>
//               <div className="relative z-10 flex items-center">
//                 <ArrowRight 
//                   ref={arrowRef1}
//                   size={20} 
//                   className="transition-transform duration-300 group-hover:scale-110" 
//                 />
//               </div>

//               <motion.div
//                 className="absolute inset-0 border-2 border-purple-300 rounded-full"
//                 initial={{ scale: 1, opacity: 0 }}
//                 whileHover={{
//                   scale: 1.1,
//                   opacity: [0, 0.6, 0],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity
//                 }}
//               />
//             </motion.button>

//             {/* BUTTON 2 */}
//             <motion.button
//               onClick={handleGetInTouch}
//               className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 overflow-hidden"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-white rounded-full"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.4 }}
//               />

//               <span className="relative z-10">Get in Touch</span>
//               <div className="relative z-10 flex items-center">
//                 <motion.span
//                   ref={arrowRef2}
//                   className="inline-block text-lg font-bold"
//                   whileHover={{ x: 4 }}
//                 >
//                   →
//                 </motion.span>
//               </div>

//               <motion.div
//                 className="absolute inset-0 border-2 border-white rounded-full"
//                 initial={{ scale: 1, opacity: 0 }}
//                 whileHover={{
//                   scale: 1.08,
//                   opacity: [0, 0.4, 0],
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   repeat: Infinity
//                 }}
//               />
//             </motion.button>

//           </div>
//         </div>
//       </div>

//       {/* BOTTOM TEXT SECTION */}
//       <div className="w-[95%] mx-auto mt-10 text-white">
//         <LettersPullUp
//           text="The Futurix Visuals"
//           className="text-4xl md:text-6xl lg:text-7xl bg-fuchsia-600 font-bold text-white"
//         />

//         <LettersPullUp
//           text="We are a Creative studio specializing in product launch animations, Scroll Stopping Mixed Reality Videos and web & app UI that make your site feel alive. Our team delivers stunning visuals that captivate your audience and elevate your brand presence across all digital platforms."
//           className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mt-6 max-w-4xl"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;
// import React, { useEffect, useRef, useState } from "react";
// import { RotateWords } from "./RotateWords";
// import { LettersPullUp } from "./LettersPullUp";
// import ShowreelButton from "./ShowreelButton";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { HeroLettersPullUp } from "./HeroTextAnimation";
// import gsap from "gsap";

// const Hero = () => {
//   const arrowRef1 = useRef(null);
//   const arrowRef2 = useRef(null);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   useEffect(() => {
//     if (arrowRef1.current) {
//       gsap.to(arrowRef1.current, {
//         x: 6,
//         duration: 0.8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.2
//       });
//     }

//     if (arrowRef2.current) {
//       gsap.to(arrowRef2.current, {
//         x: 5,
//         duration: 0.7,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.3
//       });
//     }

//     // Preload YouTube videos
//     const preloadVideos = () => {
//       const desktopIframe = document.createElement('iframe');
//       desktopIframe.style.display = 'none';
//       desktopIframe.src = "https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       const mobileIframe = document.createElement('iframe');
//       mobileIframe.style.display = 'none';
//       mobileIframe.src = "https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       document.body.appendChild(desktopIframe);
//       document.body.appendChild(mobileIframe);
      
//       setTimeout(() => {
//         setVideoLoaded(true);
//         document.body.removeChild(desktopIframe);
//         document.body.removeChild(mobileIframe);
//       }, 1000);
//     };

//     preloadVideos();
//   }, []);

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     window.location.href = "/contact";
//   };

//   const handleGetInTouch = (e) => {
//     e.preventDefault();
//     window.location.href = "/#pricing-section";
//   };

//   return (
//     <section className="w-full font-['PP_Mori']">
      
//       {/* VIDEO CONTAINER - Full width with minimal margins */}
//       <div className="relative w-[calc(100%-2rem)] mx-auto rounded-3xl overflow-hidden h-[90vh] mt-14">

//         {/* Desktop Video */}
//         <div className="hidden md:block absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Mobile Video */}
//         <div className="block md:hidden absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Subtle Loading Background */}
//         <div 
//           className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black transition-opacity duration-500"
//           style={{ opacity: videoLoaded ? 0 : 1 }}
//         />

//         <div className="">
//           <ShowreelButton video="https://www.youtube.com/embed/HjSpbj8ARGo" />
//         </div>

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/30"></div>

//         {/* LEFT GRADIENT */}
//         <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm pointer-events-none" />

//         {/* TEXT OVERLAY */}
//         <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-6 md:px-16 gap-5 text-white z-10">

       
//           <HeroLettersPullUp
//           text="We elevent your"
//           className="text-xl pt-4 md:text-4xl font-bold "
//           />

//           <RotateWords 
//             text="" 
//             words={["E-COM", "PRODUCT", "WEBSITES", "VISUALS"]} 
//             interval={2000} 
//             className=" font-bold text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none"
//           />

//           <HeroLettersPullUp
//             text="3D Content & Visuals"
//             className="text-lg md:text-4xl opacity-90 font-bold "
//           />

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-6">

//             {/* BUTTON 1 */}
//             <motion.button
//               onClick={handleContactClick}
//               className="group relative inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 rounded-full bg-purple-500 hover:bg-purple-400 text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl overflow-hidden border-2 border-purple-400 font-['PP_Mori']"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 10px 30px rgba(192, 132, 252, 0.4)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.4 }}
//               />

//               <span className="relative z-10 font-semibold">Let's Talk</span>
//               <div className="relative z-10 flex items-center">
//                 <ArrowRight 
//                   ref={arrowRef1}
//                   size={20} 
//                   className="transition-transform duration-300 group-hover:scale-110" 
//                 />
//               </div>

//               <motion.div
//                 className="absolute inset-0 border-2 border-purple-300 rounded-full"
//                 initial={{ scale: 1, opacity: 0 }}
//                 whileHover={{
//                   scale: 1.1,
//                   opacity: [0, 0.6, 0],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity
//                 }}
//               />
//             </motion.button>

//             {/* BUTTON 2 */}
//             <motion.button
//               onClick={handleGetInTouch}
//               className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 overflow-hidden font-['PP_Mori']"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-white rounded-full"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.4 }}
//               />

//               <span className="relative z-10">Get in Touch</span>
//               <div className="relative z-10 flex items-center">
//                 <motion.span
//                   ref={arrowRef2}
//                   className="inline-block text-lg font-bold"
//                   whileHover={{ x: 4 }}
//                 >
//                   →
//                 </motion.span>
//               </div>

//               <motion.div
//                 className="absolute inset-0 border-2 border-white rounded-full"
//                 initial={{ scale: 1, opacity: 0 }}
//                 whileHover={{
//                   scale: 1.08,
//                   opacity: [0, 0.4, 0],
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   repeat: Infinity
//                 }}
//               />
//             </motion.button>

//           </div>
//         </div>
//       </div>

//       {/* BOTTOM TEXT SECTION */}
//       <div 
//         className="
//             w-full 
//             max-w-7xl 
//             mx-auto 
//             mt-12
//             mb-16
//             py-48 
//             px-6 
//             flex 
//             items-center 
//             text-white 
//             justify-center 
//             text-center 
//             md:justify-start 
//             md:text-left
//         "
//       >
//         {/* Description */}
//         <HeroLettersPullUp
//           text="         We are a Creative studio specializing in product launch Animations, Scroll Stopping Mixed Reality Videos and Web & App UI that make your site feel alive."
//           className="
//               text-xl 
//               md:text-3xl 
//               lg:text-3xl 
//               text-black 
//               font-[400] 
//               leading-relaxed
//               text-center 
//               max-w-2xl 
//               md:max-w-5xl 
//               md:text-left 
//               md:mx-0 
//           "
//           highlightWords={["Creative", "Animations", "Web & App UI", "Videos"]}
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useRef, useState } from "react";
// import { RotateWords } from "./RotateWords";
// import { LettersPullUp } from "./LettersPullUp";
// import ShowreelButton from "./ShowreelButton";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { HeroLettersPullUp } from "./HeroTextAnimation";
// import gsap from "gsap";

// const Hero = () => {
//   const arrowRef1 = useRef(null);
//   const arrowRef2 = useRef(null);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   useEffect(() => {
//     if (arrowRef1.current) {
//       gsap.to(arrowRef1.current, {
//         x: 6,
//         duration: 0.8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.2
//       });
//     }

//     if (arrowRef2.current) {
//       gsap.to(arrowRef2.current, {
//         x: 5,
//         duration: 0.7,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.3
//       });
//     }

//     // Preload YouTube videos
//     const preloadVideos = () => {
//       const desktopIframe = document.createElement('iframe');
//       desktopIframe.style.display = 'none';
//       desktopIframe.src = "https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       const mobileIframe = document.createElement('iframe');
//       mobileIframe.style.display = 'none';
//       mobileIframe.src = "https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       document.body.appendChild(desktopIframe);
//       document.body.appendChild(mobileIframe);
      
//       setTimeout(() => {
//         setVideoLoaded(true);
//         document.body.removeChild(desktopIframe);
//         document.body.removeChild(mobileIframe);
//       }, 1000);
//     };

//     preloadVideos();
//   }, []);

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     window.location.href = "/contact";
//   };

//   const handleGetInTouch = (e) => {
//     e.preventDefault();
//     window.location.href = "/contact";
//   };

//   return (
//     <section className="w-full mt-0 overflow-hidden font-['PP_Mori']">
      
//       {/* VIDEO CONTAINER - Changed mt-14 to mt-2 for minimal space */}
//       <div className="relative w-[calc(100%-2rem)] mx-auto rounded-3xl overflow-hidden h-[90vh] mt-2">

//         {/* Desktop Video */}
//         <div className="hidden md:block absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Mobile Video */}
//         <div className="block md:hidden absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Subtle Loading Background */}
//         <div 
//           className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black transition-opacity duration-500"
//           style={{ opacity: videoLoaded ? 0 : 1 }}
//         />

//         <div className="">
//           <ShowreelButton video="https://www.youtube.com/embed/HjSpbj8ARGo" />
//         </div>

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/30"></div>

//         {/* LEFT GRADIENT */}
//         <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm pointer-events-none" />

//         {/* TEXT OVERLAY */}
//         <div className="absolute top-0 left-0 h-full flex flex-col justify-center px-6 md:px-16 gap-0 py-0 text-white z-10">

//         {/* Line 1: "We Elevent Your" (Now "We Flare up your" from your screenshot) */}
//           <HeroLettersPullUp
//             /* Added a negative top margin to pull this line even closer to the large text below */
//             text="We Elevent Your" 
//             className="text-xl md:text-3xl font-bold -mb-1"
//           />

//           {/* Line 2: Rotating words (E-com) */}
//           <RotateWords 
//             text="" 
//             words={["E-COM", "PRODUCT", "WEBSITES", "VISUALS"]} 
//             interval={2000} 
//             /* IMPORTANT: leading-none keeps the line height minimal */
//             className="font-bold text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none"
//           />

//           {/* Line 3: "3D Content & Visuals" */}
//           <HeroLettersPullUp
//             /* Added a negative top margin to pull this line closer to the large text above */
//             text="3D Content & Visuals"
//             className="text-lg md:text-4xl opacity-90 font-bold -mt-2" 
//           />
//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-4">

//             {/* BUTTON 1 */}
//             {/* BUTTON 2 */}
//             <motion.button
//               onClick={handleGetInTouch}
//               className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 overflow-hidden font-['PP_Mori']"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-white rounded-full"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.4 }}
//               />

//               <span className="relative z-10 font-sans">Get in Touch</span>
//               <div className="relative z-10 flex items-center">
//                 <motion.span
//                   ref={arrowRef2}
//                   className="inline-block text-lg font-bold"
//                   whileHover={{ x: 4 }}
//                 >
//                   →
//                 </motion.span>
//               </div>

//               <motion.div
//                 className="absolute inset-0 border-2 border-white rounded-full"
//                 initial={{ scale: 1, opacity: 0 }}
//                 whileHover={{
//                   scale: 1.08,
//                   opacity: [0, 0.4, 0],
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   repeat: Infinity
//                 }}
//               />
//             </motion.button>

//           </div>
//         </div>
//       </div>

//       {/* BOTTOM TEXT SECTION */}
//      <div 
//     className="
//         w-full 
  
//         mt-12
//         mb-16
//         py-48 
//         px-6 
//         flex 
//         items-center 
//         text-black 
//         justify-start 
//         text-left 
//     "
// >
//     {/* Description with custom highlight component */}
//     <div className="
//         text-xl 
//         md:text-3xl 
//         lg:text-5xl 
//         font-[400] 
//         leading-relaxed
//         text-left 
//         w-full
//     ">
//         <HeroLettersPullUp
//             text="We Don't Just Create Visuals--We Create Impact."
//             className="inline"
//             highlightClassName="text-purple-600 font-semibold"
//         />
//         <HeroLettersPullUp
//             text="At Futurix Visuals, Every Frame And Idea Is Crafted To Make Your Brand Looks Strong And Stand Out."
//             className="inline"
//             highlightWords={["Futurix","Visuals"]}
//             highlightClassName="text-purple-600 font-semibold"
//         />
//         <HeroLettersPullUp
//             text="We Mix Creativity With 3D Precision To Deliver Scroll-Stopping Animations."
//             className="inline"
//             highlightWords={["Creativity","Scroll-Stopping"]}
//             highlightClassName="text-purple-600 font-semibold"
//         />
//     </div>
// </div>
//     </section>
//   );
// };

// export default Hero;---------------------------------- importtant one

// import React, { useEffect, useRef, useState } from "react";
// import { RotateWords } from "./RotateWords";
// import ShowreelButton from "./ShowreelButton";
// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";
// import { HeroLettersPullUp } from "./HeroTextAnimation";
// import gsap from "gsap";

// const Hero = () => {
//   const arrowRef1 = useRef(null);
//   const arrowRef2 = useRef(null);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   useEffect(() => {
//     if (arrowRef1.current) {
//       gsap.to(arrowRef1.current, {
//         x: 6,
//         duration: 0.8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.2
//       });
//     }

//     if (arrowRef2.current) {
//       gsap.to(arrowRef2.current, {
//         x: 5,
//         duration: 0.7,
//         repeat: -1,
//         yoyo: true,
//         ease: "power2.inOut",
//         repeatDelay: 0.3
//       });
//     }

//     // Preload YouTube videos
//     const preloadVideos = () => {
//       const desktopIframe = document.createElement('iframe');
//       desktopIframe.style.display = 'none';
//       desktopIframe.src = "https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       const mobileIframe = document.createElement('iframe');
//       mobileIframe.style.display = 'none';
//       mobileIframe.src = "https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3";
      
//       document.body.appendChild(desktopIframe);
//       document.body.appendChild(mobileIframe);
      
//       setTimeout(() => {
//         setVideoLoaded(true);
//         document.body.removeChild(desktopIframe);
//         document.body.removeChild(mobileIframe);
//       }, 1000);
//     };

//     preloadVideos();
//   }, []);

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     window.location.href = "/contact";
//   };

//   const handleGetInTouch = (e) => {
//     e.preventDefault();
//     window.location.href = "/contact";
//   };

//   return (
//     <section className="w-full mt-0 overflow-hidden font-['PP_Mori']">
      
//       {/* VIDEO CONTAINER */}
//       <div className="relative w-full md:w-[calc(100%-2rem)] mx-auto md:rounded-3xl overflow-hidden h-[90vh] md:h-[90vh] mt-0 md:mt-2">

//         {/* Desktop Video */}
//         <div className="hidden md:block absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/HjSpbj8ARGo?autoplay=1&mute=1&loop=1&playlist=HjSpbj8ARGo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Mobile Video */}
//         <div className="block md:hidden absolute inset-0 overflow-hidden">
//           <iframe
//             src="https://www.youtube.com/embed/y5YHKnRZ9KA?autoplay=1&mute=1&loop=1&playlist=y5YHKnRZ9KA&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1"
//             className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 object-cover"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             style={{ 
//               pointerEvents: 'none',
//               opacity: videoLoaded ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out'
//             }}
//             onLoad={() => setVideoLoaded(true)}
//           />
//         </div>

//         {/* Subtle Loading Background */}
//         <div 
//           className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black transition-opacity duration-500"
//           style={{ opacity: videoLoaded ? 0 : 1 }}
//         />

//         <div className="">
//           <ShowreelButton video="https://www.youtube.com/embed/HjSpbj8ARGo" />
//         </div>

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/30"></div>

//         {/* LEFT GRADIENT - Hidden on mobile, shown on desktop */}
//         <div className="hidden md:block absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm pointer-events-none" />

//         {/* TEXT OVERLAY - Centered on mobile, left-aligned on desktop */}
//         <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-center px-4 md:items-start md:text-left md:px-16 gap-0 py-0 text-white z-10">

//           {/* Line 1: "We Elevent Your" */}
//           <HeroLettersPullUp
//             text="We Elevent Your" 
//             className="text-3xl md:text-3xl font-bold -mb-1"
//           />

//           {/* Line 2: Rotating words */}
//           <RotateWords 
//             text="" 
//             words={["E-COM", "PRODUCT", "WEBSITES", "VISUALS"]} 
//             interval={2000} 
//             className="font-bold text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none"
//           />

//           {/* Line 3: "3D Content & Visuals" */}
//           <HeroLettersPullUp
//             text="3D Content & Visuals"
//             className="text-3xl md:text-4xl opacity-90 font-bold -mt-1 md:-mt-2" 
//           />

//           {/* BUTTONS - Centered on mobile */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-4 items-center md:items-start">

//             {/* BUTTON 1 - Only show on desktop */}
        

//             {/* BUTTON 2 - Show on both, smaller on mobile */}
//             <motion.button
//               onClick={handleGetInTouch}
//               className="group relative inline-flex items-center justify-center gap-3 px-5 py-2.5 md:px-8 md:py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 overflow-hidden font-['PP_Mori'] text-sm md:text-base"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-white rounded-full"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.4 }}
//               />
//               <span className="relative z-10 font-sans">Get in Touch</span>
//               <div className="relative z-10 flex items-center">
//                 <motion.span
//                   ref={arrowRef2}
//                   className="inline-block text-base md:text-lg font-bold"
//                   whileHover={{ x: 4 }}
//                 >
//                   →
//                 </motion.span>
//               </div>
//               <motion.div
//                 className="absolute inset-0 border-2 border-white rounded-full"
//                 initial={{ scale: 1, opacity: 0 }}
//                 whileHover={{
//                   scale: 1.08,
//                   opacity: [0, 0.4, 0],
//                 }}
//                 transition={{
//                   duration: 1.2,
//                   repeat: Infinity
//                 }}
//               />
//             </motion.button>
//           </div>
//         </div>
//       </div>
      

//       {/* BOTTOM TEXT SECTION - Adjusted for mobile */}
//            <div 
//     className="
//         w-full 
  
//         mt-12
//         mb-16
//         py-48 
//         px-6 
//         flex 
//         items-center 
//         text-black 
//         justify-start 
//         text-left 
//     "
// >
//     {/* Description with custom highlight component */}
//     <div className="
//         text-xl 
//         md:text-3xl 
//         lg:text-5xl 
//         font-[400] 
//         leading-relaxed
//         text-left 
//         w-full
//     ">
//         <HeroLettersPullUp
//             text="We Don't Just Create Visuals--We Create Impact."
//             className="inline"
//             highlightClassName="text-purple-600 font-semibold"
//         />
//         <HeroLettersPullUp
//             text="At Futurix Visuals, Every Frame And Idea Is Crafted To Make Your Brand Looks Strong And Stand Out."
//             className="inline"
//             highlightWords={["Futurix","Visuals"]}
//             highlightClassName="text-purple-600 font-semibold"
//         />
//         <HeroLettersPullUp
//             text="We Mix Creativity With 3D Precision To Deliver Scroll-Stopping Animations."
//             className="inline"
//             highlightWords={["Creativity","Scroll-Stopping"]}
//             highlightClassName="text-purple-600 font-semibold"
//         />
//     </div>
// </div>
//     </section>
//   );
// };

// export default Hero;-----------------------Our final one

import React, { useEffect, useRef, useState } from "react";
import { RotateWords } from "./RotateWords";
import ShowreelButton from "./ShowreelButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroLettersPullUp } from "./HeroTextAnimation";
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

    // Preload videos
    const preloadVideos = () => {
      // Create video elements for preloading
      const desktopVideo = new Image();
      desktopVideo.src = "https://i.vimeocdn.com/video/placeholder.jpg"; // Placeholder
      
      const mobileVideo = new Image();
      mobileVideo.src = "https://i.vimeocdn.com/video/placeholder.jpg"; // Placeholder
      
      setTimeout(() => {
        setVideoLoaded(true);
      }, 500);
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
//mt-0 md:mt-2
  return (
    <section className="w-full mt-0 overflow-hidden font-['PP_Mori']">
      
      {/* VIDEO CONTAINER */}
      <div className="relative w-full md:w-[calc(100%-2rem)] mx-auto sm:rounded-3xl md:rounded-3xl overflow-hidden h-[90vh] md:h-[90vh] mt-0 md:pt-12">

        {/* Desktop Video - Vimeo Player */}
        <div className="hidden md:block absolute inset-0 overflow-hidden">
          <div 
            style={{ 
              padding: '56.25% 0 0 0', 
              position: 'relative',
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1143071815?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                            borderRadius: '1.5rem' /* 3xl equivalent */

              }}
              title="Futurix Visuals Desktop"
              onLoad={() => setVideoLoaded(true)}
            />
          </div>
        </div>

        {/* Mobile Video - Vimeo Player */}
        <div className="block md:hidden absolute inset-0 overflow-hidden">
          <div 
            style={{ 
              padding: '177.78% 0 0 0', 
              position: 'relative',
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1143072856?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                            borderRadius: '1.5rem' /* 3xl equivalent */

              }}
              title="Futurix Visuals Mobile"
              onLoad={() => setVideoLoaded(true)}
            />
          </div>
        </div>

        {/* Subtle Loading Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black transition-opacity duration-500"
          style={{ opacity: videoLoaded ? 0 : 1 }}
        />

        {/* Showreel Button */}
        <div className="">
          <ShowreelButton video="https://player.vimeo.com/video/1143071045?autoplay=1&muted=1&loop=1" />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* LEFT GRADIENT - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm pointer-events-none" />

        {/* TEXT OVERLAY - Centered on mobile, left-aligned on desktop */}
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-center px-4 md:items-start md:text-left md:px-16 gap-0 py-0 text-white z-10">

          {/* Line 1: "We Elevent Your" */}
          <HeroLettersPullUp
            text="We Elevent Your" 
            className="text-3xl md:text-3xl font-bold -mb-1"
          />

          {/* Line 2: Rotating words */}
          <RotateWords 
            text="" 
            words={["E-COM", "PRODUCT", "WEBSITES", "VISUALS"]} 
            interval={2000} 
            className="font-extrabold text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none"
          />

          {/* Line 3: "3D Content & Visuals" */}
          <HeroLettersPullUp
            text="3D Content & Visuals"
            className="text-3xl md:text-4xl opacity-90 font-bold -mt-1 md:-mt-2" 
          />

          {/* BUTTONS - Centered on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-4 items-center md:items-start">

            {/* BUTTON 2 - Show on both, smaller on mobile */}
            <motion.button
              onClick={handleGetInTouch}
              className="group relative inline-flex items-center justify-center gap-3 px-5 py-2.5 md:px-8 md:py-4 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 overflow-hidden font-['PP_Mori'] text-sm md:text-base"
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
              <span className="relative z-10 font-sans">Get in Touch</span>
              <div className="relative z-10 flex items-center">
                <motion.span
                  ref={arrowRef2}
                  className="inline-block text-base md:text-lg font-bold"
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
      <div 
        className="w-full mt-12 mb-16 py-48 px-6 flex items-center text-black justify-start text-left"
      >
        {/* Description with custom highlight component */}
        <div className="text-xl md:text-3xl lg:text-5xl font-[400] leading-relaxed text-left w-full">
          <HeroLettersPullUp
            text="We Don't Just Create Visuals--We Create Impact."
            className="inline"
            highlightClassName="text-purple-600 font-semibold"
          />
          <HeroLettersPullUp
            text="At Futurix Visuals, Every Frame And Idea Is Crafted To Make Your Brand Looks Strong And Stand Out."
            className="inline"
            highlightWords={["Futurix","Visuals"]}
            highlightClassName="text-purple-600 font-semibold"
          />
          <HeroLettersPullUp
            text="We Mix Creativity With 3D Precision To Deliver Scroll-Stopping Animations."
            className="inline"
            highlightWords={["Creativity","Scroll-Stopping"]}
            highlightClassName="text-purple-600 font-semibold"
          />
        </div>
      </div>
    </section>
  );
};


export default Hero;

