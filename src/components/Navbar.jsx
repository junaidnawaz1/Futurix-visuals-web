// import { useState, useRef, useEffect } from "react";
// import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";

// // Import your logo
// import logo from '../assets/logo.png';

// export default function Navbar() {
//   const navItems = ["Home", "Projects", "Services", "Contact"];
  
//   // Helper function to determine the active item based on the current URL path
//   const getActiveItemFromPath = (pathname) => {
//     const normalizedPath = pathname.replace(/^\/|\/$/g, '').toLowerCase();
//     if (normalizedPath === '' || normalizedPath === 'home') {
//       return "Home";
//     }
//     const active = navItems.find(item => item.toLowerCase() === normalizedPath);
//     return active || "Home";
//   };

//   // Initialize activeItem based on the current URL path
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeHover, setActiveHover] = useState(null);
//   const [activeItem, setActiveItem] = useState(getActiveItemFromPath(window.location.pathname));
//   const contactBtnRef = useRef(null);
//   const bubbleContainerRef = useRef(null);

//   // Purple color scheme
//   const purpleColors = {
//     primary: '#3B1C57',
//     secondary: '#6D28D9',
//     accent: '#8B5CF6',
//     light: '#A78BFA',
//     dark: '#1F1235'
//   };

//   // Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setScrolled(isScrolled);
      
//       // Animate contact button on scroll
//       if (contactBtnRef.current) {
//         if (isScrolled) {
//           gsap.to(contactBtnRef.current, {
//             scale: 1.05,
//             background: `linear-gradient(135deg, ${purpleColors.accent}, ${purpleColors.secondary})`,
//             duration: 0.3
//           });
//         } else {
//           gsap.to(contactBtnRef.current, {
//             scale: 1,
//             background: "transparent",
//             duration: 0.3
//           });
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Create purple bubble effect on menu hover
//   const createBubbles = (event, item) => {
//     setActiveHover(item);
    
//     if (bubbleContainerRef.current) {
//       const container = bubbleContainerRef.current;
//       const rect = event.target.getBoundingClientRect();
      
//       // Create purple bubbles
//       for (let i = 0; i < 12; i++) {
//         const bubble = document.createElement('div');
//         const size = Math.random() * 8 + 4;
//         const colors = [purpleColors.light, purpleColors.accent, purpleColors.secondary, '#C4B5FD'];
//         const color = colors[Math.floor(Math.random() * colors.length)];
        
//         bubble.className = 'absolute rounded-full pointer-events-none';
//         bubble.style.width = `${size}px`;
//         bubble.style.height = `${size}px`;
//         bubble.style.backgroundColor = `${color}80`;
//         bubble.style.left = `${Math.random() * rect.width}px`;
//         bubble.style.top = `${rect.height / 2}px`;
        
//         container.appendChild(bubble);
        
//         // Animate bubble with more varied movements
//         gsap.to(bubble, {
//           y: -40 - Math.random() * 30,
//           x: (Math.random() - 0.5) * 80,
//           scale: 0,
//           opacity: 0,
//           duration: 1.2 + Math.random() * 0.8,
//           ease: "power2.out",
//           onComplete: () => {
//             if (bubble.parentNode) {
//               bubble.parentNode.removeChild(bubble);
//             }
//           }
//         });
//       }
//     }
//   };

//   // Enhanced contact button hover animation with purple theme
//   const handleContactHover = (isHovering) => {
//     if (!contactBtnRef.current) return;
    
//     if (isHovering) {
//       gsap.to(contactBtnRef.current, {
//         y: -2,
//         background: `linear-gradient(135deg, ${purpleColors.light}, ${purpleColors.accent})`,
//         boxShadow: `0 8px 25px ${purpleColors.accent}40`,
//         duration: 0.3
//       });
//     } else {
//       gsap.to(contactBtnRef.current, {
//         y: 0,
//         background: scrolled ? 
//           `linear-gradient(135deg, ${purpleColors.accent}, ${purpleColors.secondary})` : 
//           "transparent",
//         boxShadow: "none",
//         duration: 0.3
//       });
//     }
//   };

//   const handleContactClick = (e) => {
//     if(e) e.preventDefault();
//     setActiveItem("Contact");
//     setOpen(false);
//     window.location.href = '/contact';
//   };

//   const handleItemClick = (e, item) => {
//   e.preventDefault();
//   setActiveItem(item);
//   setOpen(false);
  
//   if (item === "Services") {
//     // Always navigate to home page with services section hash
//     if (window.location.pathname === '/') {
//       // If already on home page, scroll to services
//       setTimeout(() => {
//         const servicesSection = document.getElementById('services-section');
//         if (servicesSection) {
//           servicesSection.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       // If on other page, navigate to home with hash
//       window.location.href = '/#services-section';
//     }
//   } else {
//     // Normal navigation for other items
//     const path = item === "Home" ? '/' : `/${item.toLowerCase()}`;
//     window.location.href = path;
//   }
// };
//   const handleLogoClick = (e) => {
//     e.preventDefault();
//     setActiveItem("Home");
//     setOpen(false);
//     window.location.href = '/';
//   };

//   return (
//     <motion.nav 
//       className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
//         scrolled 
//           ? "bg-slate-900/20 backdrop-blur-xl shadow-2xl shadow-purple-500/10 py-3 border-b border-purple-500/20" 
//           : "bg-transparent py-6"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* Bubble Container */}
//       <div ref={bubbleContainerRef} className="absolute inset-0 pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
//         {/* Logo Only - Click to navigate to Home */}
//         <motion.div
//           className="relative"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <a href="/" onClick={handleLogoClick}>
//             <motion.img
//               src={logo}
//               alt="Futurix Visuals"
//               className="h-20 w-20 object-contain cursor-pointer"
//               whileHover={{ rotate: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             />
//           </a>
//         </motion.div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-12 text-lg items-center">
//           {navItems.map((item, index) => (
//             <li key={item}>
//               <motion.div
//                 className="relative"
//                 onHoverStart={(e) => createBubbles(e, item)}
//                 onHoverEnd={() => setActiveHover(null)}
//                 whileHover={{ y: -2 }}
//               >
//                 <a 
//                   href={item === "Home" ? "/" : item === "Services" ? "/#services-section" : `/${item.toLowerCase()}`}
//                   className={`relative py-3 px-2 block font-medium transition-all ${
//                     activeItem === item
//                       ? 'text-purple-300 bg-purple-500/10 rounded-lg'
//                       : 'text-white/90 hover:text-white'
//                   }`}
//                   onClick={(e) => handleItemClick(e, item)}
//                 >
//                   {item}
                  
//                   {/* Active state indicator for desktop */}
//                   {activeItem === item && (
//                     <motion.div
//                       className="absolute inset-0 border-2 border-purple-400/50 rounded-lg"
//                       initial={{ scale: 0.8, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   )}
                  
//                   {/* Purple underline animation - only show when not active */}
//                   {activeItem !== item && (
//                     <motion.div 
//                       className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 rounded-full"
//                       initial={{ scaleX: 0 }}
//                       whileHover={{ scaleX: 1 }}
//                       transition={{ duration: 0.4, ease: "easeOut" }}
//                     />
//                   )}
                  
//                   {/* Purple glow effect */}
//                   <motion.div
//                     className="absolute inset-0 bg-purple-400/10 rounded-lg blur-md"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: activeItem === item ? 0.3 : 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
                  
//                   {/* Purple Floating particles */}
//                   {[...Array(4)].map((_, i) => (
//                     <motion.div
//                       key={`left-${i}`}
//                       className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full"
//                       style={{
//                         top: `${10 + (i * 8)}px`,
//                         left: '-12px'
//                       }}
//                       initial={{ scale: 0, y: 5, opacity: 0 }}
//                       whileHover={{ 
//                         scale: [0, 1, 0],
//                         y: [5, -12, 5],
//                         opacity: [0, 0.8, 0],
//                         x: [0, -4, 0]
//                       }}
//                       transition={{ 
//                         duration: 1.8 + i * 0.3,
//                         repeat: Infinity,
//                         delay: i * 0.2,
//                         ease: "easeInOut"
//                       }}
//                     />
//                   ))}
                  
//                   {/* Right Side Purple Particles */}
//                   {[...Array(4)].map((_, i) => (
//                     <motion.div
//                       key={`right-${i}`}
//                       className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full"
//                       style={{
//                         top: `${10 + (i * 8)}px`,
//                         right: '-12px'
//                       }}
//                       initial={{ scale: 0, y: 5, opacity: 0 }}
//                       whileHover={{ 
//                         scale: [0, 1, 0],
//                         y: [5, -12, 5],
//                         opacity: [0, 0.8, 0],
//                         x: [0, 4, 0]
//                       }}
//                       transition={{ 
//                         duration: 1.8 + i * 0.3,
//                         repeat: Infinity,
//                         delay: i * 0.2,
//                         ease: "easeInOut"
//                       }}
//                     />
//                   ))}
                  
//                   {/* Top Center Purple Particles */}
//                   {[...Array(3)].map((_, i) => (
//                     <motion.div
//                       key={`top-${i}`}
//                       className="absolute w-2 h-2 rounded-full"
//                       style={{
//                         backgroundColor: i % 2 === 0 ? purpleColors.light : purpleColors.accent,
//                         top: `${-8 + (i * 4)}px`,
//                         left: '50%',
//                         transform: 'translateX(-50%)'
//                       }}
//                       initial={{ scale: 0, y: 8, opacity: 0 }}
//                       whileHover={{ 
//                         scale: [0, 1, 0],
//                         y: [8, -18, 8],
//                         opacity: [0, 1, 0]
//                       }}
//                       transition={{ 
//                         duration: 2 + i * 0.4,
//                         repeat: Infinity,
//                         delay: i * 0.15,
//                         ease: "easeInOut"
//                       }}
//                     />
//                   ))}
                  
//                   {/* Active state purple particles */}
//                   {activeItem === item && (
//                     <>
//                       <motion.div
//                         className="absolute -top-1 -left-1 w-3 h-3 bg-purple-400 rounded-full"
//                         animate={{
//                           scale: [1, 1.2, 1],
//                           opacity: [0.7, 1, 0.7]
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           ease: "easeInOut"
//                         }}
//                       />
//                       <motion.div
//                         className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full"
//                         animate={{
//                           scale: [1, 1.2, 1],
//                           opacity: [0.7, 1, 0.7]
//                         }}
//                         transition={{
//                           duration: 2,
//                           repeat: Infinity,
//                           delay: 0.5,
//                           ease: "easeInOut"
//                         }}
//                       />
//                     </>
//                   )}
//                 </a>
//               </motion.div>
//             </li>
//           ))}
          
//           {/* Enhanced Contact Button with Purple Gradient */}
//           <motion.button
//             ref={contactBtnRef}
//             className={`flex items-center gap-3 px-8 py-3 text-white rounded-2xl transition-all relative overflow-hidden group ${
//               activeItem === "Contact"
//                 ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg shadow-purple-500/20"
//                 : "border-2 border-purple-400 text-purple-400 hover:text-white"
//             }`}
//             onMouseEnter={() => handleContactHover(true)}
//             onMouseLeave={() => handleContactHover(false)}
//             whileHover={{ scale: activeItem === "Contact" ? 1 : 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleContactClick}
//           >
//             {/* Purple gradient fill background */}
//             {activeItem !== "Contact" && (
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.2 }}
//               />
//             )}
            
//             {/* Button content */}
//             <span className="relative z-10 font-semibold">Contact</span>
//             <motion.div
//               className="relative z-10"
//               animate={{ 
//                 x: activeItem === "Contact" ? [0, 3, 0] : [0, 5, 0],
//                 rotate: activeItem === "Contact" ? [0, 5, 0] : [0, 10, 0]
//               }}
//               transition={{ 
//                 duration: 2, 
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//             >
//               <MessageCircle size={18} />
//             </motion.div>
            
//             {/* Purple ripple effect */}
//             <motion.div
//               className="absolute inset-0 border-2 border-purple-400 rounded-2xl"
//               initial={{ scale: 1, opacity: 0 }}
//               whileHover={{
//                 scale: 1.1,
//                 opacity: [0, 0.8, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity
//               }}
//             />
            
//             {/* Purple floating particles around contact button */}
//             {[...Array(6)].map((_, i) => (
//               <motion.div
//                 key={`contact-particle-${i}`}
//                 className="absolute w-1.5 h-1.5 rounded-full"
//                 style={{
//                   backgroundColor: i % 2 === 0 ? purpleColors.light : purpleColors.accent,
//                   top: `${20 + (i * 12)}%`,
//                   left: `${10 + (i * 15)}%`,
//                 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 whileHover={{
//                   scale: [0, 1, 0],
//                   opacity: [0, 0.7, 0],
//                   y: [0, -15, 0],
//                   x: [0, (Math.random() - 0.5) * 20, 0]
//                 }}
//                 transition={{
//                   duration: 2 + Math.random() * 1,
//                   repeat: Infinity,
//                   delay: Math.random() * 1,
//                 }}
//               />
//             ))}
//           </motion.button>
//         </ul>

//         {/* Mobile Toggle */}
//         <motion.button 
//           className="md:hidden text-purple-400 bg-slate-800/50 p-2 rounded-lg backdrop-blur-sm"
//           onClick={() => setOpen(!open)}
//           whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
//           whileTap={{ scale: 0.9 }}
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </motion.button>
//       </div>

//       {/* Mobile Menu with Purple Theme */}
//       <AnimatePresence>
//         {open && (
//           <motion.ul 
//             className="md:hidden bg-slate-900/95 backdrop-blur-xl w-full text-center flex flex-col gap-2 py-6 text-lg absolute top-full left-0 border-t border-purple-500/20"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             {navItems.map((item, index) => (
//               <motion.li 
//                 key={item}
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.1, duration: 0.3 }}
//               >
//                 <a 
//                   href={item === "Home" ? "/" : item === "Services" ? "/#services-section" : `/${item.toLowerCase()}`}
//                   className={`block py-4 transition-all border-l-4 mx-4 rounded-r-lg ${
//                     activeItem === item
//                       ? 'bg-purple-500/20 text-purple-300 border-purple-400 pl-6 shadow-lg shadow-purple-500/10'
//                       : 'text-white/90 border-transparent hover:bg-purple-500/10 hover:border-purple-400 hover:pl-6'
//                   }`}
//                   onClick={(e) => handleItemClick(e, item)}
//                 >
//                   <motion.span
//                     whileHover={{ x: activeItem === item ? 0 : 10 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                     className="flex items-center justify-center gap-2"
//                   >
//                     {item}
//                     {activeItem === item && (
//                       <motion.div
//                         initial={{ scale: 0, rotate: -180 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         className="w-2 h-2 bg-purple-400 rounded-full"
//                       />
//                     )}
//                   </motion.span>
                  
//                   {/* Purple active state indicator wave */}
//                   {activeItem === item && (
//                     <motion.div
//                       className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-r-full"
//                       initial={{ scaleY: 0 }}
//                       animate={{ scaleY: 1 }}
//                       transition={{ duration: 0.3, delay: 0.2 }}
//                     />
//                   )}
//                 </a>
//               </motion.li>
//             ))}
            
//             {/* Mobile Contact Button */}
//             <motion.div
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="px-6 pt-4"
//             >
//               <button
//                 onClick={handleContactClick}
//                 className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all ${
//                   activeItem === "Contact"
//                     ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/20'
//                     : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
//                 }`}
//               >
//                 Contact Us
//                 <MessageCircle size={18} />
//                 {activeItem === "Contact" && (
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     className="w-2 h-2 bg-white rounded-full"
//                   />
//                 )}
//               </button>
//             </motion.div>
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
// import { useState, useRef, useEffect } from "react";
// import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";

// // Import your logo
// import logo from '../assets/logo.png';

// // --- WHITE COLOR SCHEME ---
// const whiteColors = {
//     primary: '#FFFFFF', // white
//     secondary: '#F8FAFC', // slate-50
//     accent: '#E2E8F0', // slate-200
//     light: '#64748B', // slate-500
//     dark: '#0F172A' // slate-900
// };

// // --- Flipping Text Component (Enhanced Smooth Vertical/X-Axis Flip) ---
// const FlippingText = ({ text, active, onClick }) => {
//     const lettersRef = useRef([]);
//     const itemRef = useRef(null);
//     const rotationState = useRef(0);

//     const handleMouseEnter = () => {
//         rotationState.current += 360; 
        
//         gsap.killTweensOf(lettersRef.current);
        
//         gsap.to(lettersRef.current, {
//             rotationX: rotationState.current,
//             y: -2,
//             color: active ? whiteColors.dark : whiteColors.dark,
//             duration: 0.8,
//             ease: "power2.inOut", 
//             stagger: 0.04,
//             overwrite: true,
//         });
//     };

//     const handleMouseLeave = () => {
//         const targetRotation = rotationState.current - 360;
        
//         gsap.killTweensOf(lettersRef.current);
        
//         gsap.to(lettersRef.current, {
//             rotationX: targetRotation,
//             y: 0,
//             color: active ? whiteColors.dark : whiteColors.light,
//             duration: 0.8, 
//             ease: "power2.inOut",
//             stagger: {
//                 each: 0.04,
//                 from: "end",
//             },
//             overwrite: true,
//             onComplete: () => {
//                 rotationState.current = targetRotation;
//             }
//         });
//     };

//     return (
//         <a 
//             ref={itemRef}
//             href={text === "Home" ? "/" : text === "Services" ? "/#services-section" : `/${text.toLowerCase()}`}
//             className={`relative py-3 px-2 block font-bold transition-all ${
//                 active 
//                     ? 'text-slate-900'
//                     : 'text-slate-600 hover:text-slate-900'
//             }`}
//             onClick={onClick}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             <div className="flex relative">
//                 {text.split('').map((char, index) => (
//                     <span
//                         key={index}
//                         ref={el => lettersRef.current[index] = el}
//                         className="inline-block origin-center transition-colors duration-200"
//                         style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
//                     >
//                         {char === ' ' ? '\u00A0' : char}
//                     </span>
//                 ))}
//             </div>
            
//             {/* Active state indicator for desktop */}
//             {active && (
//                 <motion.div
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"
//                     layoutId="active-nav-underline" 
//                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                 />
//             )}
//         </a>
//     );
// };

// export default function Navbar() {
//     const navItems = ["Home", "Projects", "Services"];
    
//     const getActiveItemFromPath = (pathname) => {
//         const normalizedPath = pathname.replace(/^\/|\/$/g, '').toLowerCase();
//         if (normalizedPath === '' || normalizedPath === 'home') {
//             return "Home";
//         }
//         const active = navItems.find(item => item.toLowerCase() === normalizedPath);
//         return active || "Home";
//     };

//     const [open, setOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [activeItem, setActiveItem] = useState(getActiveItemFromPath(window.location.pathname));
//     const contactBtnRef = useRef(null);

//     // Scroll detection
//     useEffect(() => {
//         const handleScroll = () => {
//             const isScrolled = window.scrollY > 50;
//             setScrolled(isScrolled);
            
//             if (contactBtnRef.current) {
//                 gsap.to(contactBtnRef.current, {
//                     scale: isScrolled ? 1.05 : 1,
//                     boxShadow: isScrolled ? `0 8px 25px rgba(99, 102, 241, 0.3)` : "none",
//                     duration: 0.3
//                 });
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Enhanced contact button hover animation
//     const handleContactHover = (isHovering) => {
//         if (!contactBtnRef.current) return;
        
//         if (isHovering) {
//             gsap.to(contactBtnRef.current, {
//                 y: -2,
//                 boxShadow: `0 8px 25px rgba(99, 102, 241, 0.4)`,
//                 duration: 0.3
//             });
//         } else {
//             gsap.to(contactBtnRef.current, {
//                 y: 0,
//                 boxShadow: scrolled ? `0 8px 25px rgba(99, 102, 241, 0.3)` : "none",
//                 duration: 0.3
//             });
//         }
//     };

//     const handleContactClick = (e) => {
//         if(e) e.preventDefault();
//         setActiveItem("Contact");
//         setOpen(false);
//         window.location.href = '/contact';
//     };

//     const handleItemClick = (e, item) => {
//         e.preventDefault();
//         setActiveItem(item);
//         setOpen(false);
        
//         if (item === "Services") {
//             if (window.location.pathname === '/') {
//                 setTimeout(() => {
//                     document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
//                 }, 100);
//             } else {
//                 window.location.href = '/#services-section';
//             }
//         } else {
//             const path = item === "Home" ? '/' : `/${item.toLowerCase()}`;
//             window.location.href = path;
//         }
//     };
    
//     const handleLogoClick = (e) => {
//         e.preventDefault();
//         setActiveItem("Home");
//         setOpen(false);
//         window.location.href = '/';
//     };

//     return (
//         <motion.nav 
//             className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
//                 scrolled 
//                     ? "bg-white/95 backdrop-blur-sm shadow-2xl shadow-slate-200/20 py-3 border-b border-slate-200" 
//                     : "bg-white py-4"
//             }`}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//         >
            
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                
//                 {/* Logo */}
//                 <motion.div
//                     className="relative"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                 >
//                     <a href="/" onClick={handleLogoClick}>
//                         <motion.img
//                             src={logo}
//                             alt="Futurix Visuals"
//                             className="h-12 w-12  object-contain cursor-pointer"
//                             whileHover={{ rotate: 5 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                         />
//                     </a>
//                 </motion.div>

//                 {/* Desktop Menu - Centered with equal spacing */}
//                 <div className="hidden md:flex flex-1 justify-center ">
//                     <ul className="flex gap-32 text-lg ">
//                         {navItems.map((item) => (
//                             <li key={item}>
//                                 <FlippingText
//                                     text={item}
//                                     active={activeItem === item}
//                                     onClick={(e) => handleItemClick(e, item)}
//                                 />
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Contact Button - Right side */}
//                 <div className="hidden md:flex">
//                     <motion.button
//                         ref={contactBtnRef}
//                         className={`flex items-center gap-3 px-8 py-3 text-white rounded-2xl transition-all relative overflow-hidden font-semibold ${
//                             activeItem === "Contact"
//                                 ? "bg-indigo-600 shadow-lg shadow-indigo-500/30"
//                                 : "bg-indigo-600 hover:bg-indigo-700"
//                         }`}
//                         onMouseEnter={() => handleContactHover(true)}
//                         onMouseLeave={() => handleContactHover(false)}
//                         whileHover={{ scale: activeItem === "Contact" ? 1 : 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handleContactClick}
//                     >
//                         <span className="relative z-10">Contact</span>
//                         <div className="relative z-10">
//                             <MessageCircle size={18} />
//                         </div>
//                     </motion.button>
//                 </div>

//                 {/* Mobile Toggle */}
//                 <motion.button 
//                     className="md:hidden text-slate-600 bg-slate-100 p-2 rounded-lg"
//                     onClick={() => setOpen(!open)}
//                     whileHover={{ scale: 1.1, backgroundColor: '#F1F5F9' }}
//                     whileTap={{ scale: 0.9 }}
//                 >
//                     {open ? <X size={24} /> : <Menu size={24} />}
//                 </motion.button>
//             </div>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//                 {open && (
//                     <motion.ul 
//                         className="md:hidden bg-white/95 backdrop-blur-xl w-full text-center flex flex-col gap-2 py-4 text-lg absolute top-full left-0 border-t border-slate-200"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.4 }}
//                     >
//                         {navItems.map((item, index) => (
//                             <motion.li 
//                                 key={item}
//                                 initial={{ x: -50, opacity: 0 }}
//                                 animate={{ x: 0, opacity: 1 }}
//                                 transition={{ delay: index * 0.1, duration: 0.3 }}
//                             >
//                                 <a 
//                                     href={item === "Home" ? "/" : item === "Services" ? "/#services-section" : `/${item.toLowerCase()}`}
//                                     className={`block py-3 transition-all border-l-4 mx-4 rounded-r-lg ${
//                                         activeItem === item
//                                             ? 'bg-slate-100 text-slate-900 border-slate-900 pl-6'
//                                             : 'text-slate-600 border-transparent hover:bg-slate-50 hover:border-slate-900 hover:pl-6'
//                                     }`}
//                                     onClick={(e) => handleItemClick(e, item)}
//                                 >
//                                     <motion.span
//                                         className="flex items-center justify-center gap-2 font-medium"
//                                     >
//                                         {item}
//                                         {activeItem === item && (
//                                             <motion.div
//                                                 initial={{ scale: 0, rotate: -180 }}
//                                                 animate={{ scale: 1, rotate: 0 }}
//                                                 className="w-2 h-2 bg-slate-900 rounded-full"
//                                             />
//                                         )}
//                                     </motion.span>
//                                 </a>
//                             </motion.li>
//                         ))}
                        
//                         {/* Mobile Contact Button */}
//                         <motion.div
//                             initial={{ y: 20, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             transition={{ delay: 0.4 }}
//                             className="px-6 pt-4"
//                         >
//                             <button
//                                 onClick={handleContactClick}
//                                 className={`w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all bg-indigo-600 text-white hover:bg-indigo-700 ${
//                                     activeItem === "Contact" ? 'shadow-lg shadow-indigo-500/20' : ''
//                                 }`}
//                             >
//                                 Contact Us
//                                 <MessageCircle size={18} />
//                             </button>
//                         </motion.div>
//                     </motion.ul>
//                 )}
//             </AnimatePresence>
//         </motion.nav>
//     );
// }

import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

// Import your logo
import logo from '../assets/logo.png';

// --- WHITE COLOR SCHEME ---
const whiteColors = {
    primary: '#FFFFFF', // white
    secondary: '#F8FAFC', // slate-50
    accent: '#E2E8F0', // slate-200
    light: '#64748B', // slate-500
    dark: '#0F172A' // slate-900
};

// --- Flipping Text Component (Enhanced Smooth Vertical/X-Axis Flip) ---
const FlippingText = ({ text, active, onClick }) => {
    const lettersRef = useRef([]);
    const itemRef = useRef(null);
    const rotationState = useRef(0);

    const handleMouseEnter = () => {
        rotationState.current += 360; 
        
        gsap.killTweensOf(lettersRef.current);
        
        gsap.to(lettersRef.current, {
            rotationX: rotationState.current,
            y: -2,
            color: active ? whiteColors.dark : whiteColors.dark,
            duration: 0.8,
            ease: "power2.inOut", 
            stagger: 0.04,
            overwrite: true,
        });
    };

    const handleMouseLeave = () => {
        const targetRotation = rotationState.current - 360;
        
        gsap.killTweensOf(lettersRef.current);
        
        gsap.to(lettersRef.current, {
            rotationX: targetRotation,
            y: 0,
            color: active ? whiteColors.dark : whiteColors.light,
            duration: 0.8, 
            ease: "power2.inOut",
            stagger: {
                each: 0.04,
                from: "end",
            },
            overwrite: true,
            onComplete: () => {
                rotationState.current = targetRotation;
            }
        });
    };

    return (
        <a 
            ref={itemRef}
            href={text === "Home" ? "/" : text === "Services" ? "/#services-section" : `/${text.toLowerCase()}`}
            className={`relative py-2 px-2 block font-bold transition-all ${
                active 
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
            }`}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex relative">
                {text.split('').map((char, index) => (
                    <span
                        key={index}
                        ref={el => lettersRef.current[index] = el}
                        className="inline-block origin-center transition-colors duration-200"
                        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
            
            {/* Active state indicator for desktop */}
            {active && (
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"
                    layoutId="active-nav-underline" 
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </a>
    );
};

export default function Navbar() {
    const navItems = ["Home", "Projects", "Services"];
    
    const getActiveItemFromPath = (pathname) => {
        const normalizedPath = pathname.replace(/^\/|\/$/g, '').toLowerCase();
        if (normalizedPath === '' || normalizedPath === 'home') {
            return "Home";
        }
        const active = navItems.find(item => item.toLowerCase() === normalizedPath);
        return active || "Home";
    };

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState(getActiveItemFromPath(window.location.pathname));
    const contactBtnRef = useRef(null);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
            
            if (contactBtnRef.current) {
                gsap.to(contactBtnRef.current, {
                    scale: isScrolled ? 1.05 : 1,
                    boxShadow: isScrolled ? `0 8px 25px rgba(99, 102, 241, 0.3)` : "none",
                    duration: 0.3
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Enhanced contact button hover animation
    const handleContactHover = (isHovering) => {
        if (!contactBtnRef.current) return;
        
        if (isHovering) {
            gsap.to(contactBtnRef.current, {
                y: -2,
                boxShadow: `0 8px 25px rgba(99, 102, 241, 0.4)`,
                duration: 0.3
            });
        } else {
            gsap.to(contactBtnRef.current, {
                y: 0,
                boxShadow: scrolled ? `0 8px 25px rgba(99, 102, 241, 0.3)` : "none",
                duration: 0.3
            });
        }
    };

    const handleContactClick = (e) => {
        if(e) e.preventDefault();
        setActiveItem("Contact");
        setOpen(false);
        window.location.href = '/contact';
    };

    const handleItemClick = (e, item) => {
        e.preventDefault();
        setActiveItem(item);
        setOpen(false);
        
        if (item === "Services") {
            if (window.location.pathname === '/') {
                setTimeout(() => {
                    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                window.location.href = '/#services-section';
            }
        } else {
            const path = item === "Home" ? '/' : `/${item.toLowerCase()}`;
            window.location.href = path;
        }
    };
    
    const handleLogoClick = (e) => {
        e.preventDefault();
        setActiveItem("Home");
        setOpen(false);
        window.location.href = '/';
    };

    return (
        <motion.nav 
            className={`w-full fixed top-0 left-0 z-50 mb-0 transition-all duration-300 ${
                scrolled 
                    ? "bg-white/95 backdrop-blur-sm shadow-2xl shadow-slate-200/20 py-2 border-b border-slate-200" 
                    : "bg-white py-2"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                
                {/* Logo */}
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a href="/" onClick={handleLogoClick}>
                        <motion.img
                            src={logo}
                            alt="Futurix Visuals"
                            className="h-10 w-10 object-contain cursor-pointer"
                            whileHover={{ rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                    </a>
                </motion.div>

                {/* Desktop Menu - Centered with equal spacing */}
                <div className="hidden md:flex flex-1 justify-center ">
                    <ul className="flex gap-32 text-lg ">
                        {navItems.map((item) => (
                            <li key={item}>
                                <FlippingText
                                    text={item}
                                    active={activeItem === item}
                                    onClick={(e) => handleItemClick(e, item)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Button - Right side */}
                <div className="hidden md:flex">
                    <motion.button
                        ref={contactBtnRef}
                        className={`flex items-center gap-3 px-6 py-2 text-white rounded-xl transition-all relative overflow-hidden font-semibold ${
                            activeItem === "Contact"
                                ? "bg-purple-600 shadow-lg shadow-purple-500/30"
                                : "bg-purple-600 hover:bg-purple-700"
                        }`}
                        onMouseEnter={() => handleContactHover(true)}
                        onMouseLeave={() => handleContactHover(false)}
                        whileHover={{ scale: activeItem === "Contact" ? 1 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContactClick}
                    >
                        <span className="relative z-10">Contact</span>
                        <div className="relative z-10">
                            <MessageCircle size={18} />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Toggle */}
                <motion.button 
                    className="md:hidden text-slate-600 bg-slate-100 p-2 rounded-lg"
                    onClick={() => setOpen(!open)}
                    whileHover={{ scale: 1.1, backgroundColor: '#F1F5F9' }}
                    whileTap={{ scale: 0.9 }}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.ul 
                        className="md:hidden bg-white/95 backdrop-blur-xl w-full text-center flex flex-col gap-2 py-4 text-lg absolute top-full left-0 border-t border-slate-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.li 
                                key={item}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <a 
                                    href={item === "Home" ? "/" : item === "Services" ? "/#services-section" : `/${item.toLowerCase()}`}
                                    className={`block py-3 transition-all border-l-4 mx-4 rounded-r-lg ${
                                        activeItem === item
                                            ? 'bg-slate-100 text-slate-900 border-slate-900 pl-6'
                                            : 'text-slate-600 border-transparent hover:bg-slate-50 hover:border-slate-900 hover:pl-6'
                                    }`}
                                    onClick={(e) => handleItemClick(e, item)}
                                >
                                    <motion.span
                                        className="flex items-center justify-center gap-2 font-medium"
                                    >
                                        {item}
                                        {activeItem === item && (
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                className="w-2 h-2 bg-slate-900 rounded-full"
                                            />
                                        )}
                                    </motion.span>
                                </a>
                            </motion.li>
                        ))}
                        
                        {/* Mobile Contact Button */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="px-6 pt-4"
                        >
                            <button
                                onClick={handleContactClick}
                                className={`w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all bg-[#6B21A8] text-white hover:bg-purple-700 ${
                                    activeItem === "Contact" ? 'shadow-lg shadow-purple-500/20' : ''
                                }`}
                            >
                                Contact Us
                                <MessageCircle size={18} />
                            </button>
                        </motion.div>
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}