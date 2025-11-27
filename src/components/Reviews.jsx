import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { LettersPullUp } from "./LettersPullUp";
import gsap from 'gsap';

// Import assets
import reviewImage1 from '../assets/review-image1.jpg';
import reviewImage2 from '../assets/review-image2.jpg';
import reviewImage3 from '../assets/review-image3.jpg';
import reviewImage4 from '../assets/review-image4.jpg';

const Reviews = () => {
  const arrowRef1 = useRef(null);
  const arrowRef2 = useRef(null);

  const [counters, setCounters] = useState({
    projects: 0,
    countries: 0,
    years: 0,
    satisfaction: 0
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  // Counter animation
  useEffect(() => {
    if (isInView) {
      const targetValues = {
        projects: 27,
        countries: 9,
        years: 1.5,
        satisfaction: 99
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targetValues).forEach(key => {
        let currentStep = 0;
        const target = targetValues[key];
        const increment = target / steps;

        const timer = setInterval(() => {
          currentStep++;
          setCounters(prev => ({
            ...prev,
            [key]: Math.min(Math.floor(increment * currentStep), target)
          }));

          if (currentStep === steps) {
            clearInterval(timer);
          }
        }, stepDuration);
      });
    }
  }, [isInView]);

  // Enhanced Arrow Animations
  useEffect(() => {
    if (arrowRef1.current) {
      gsap.to(arrowRef1.current, {
        x: 20,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        repeatDelay: 0.5
      });
    }

    if (arrowRef2.current) {
      gsap.to(arrowRef2.current, {
        x: 8,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        repeatDelay: 0.15
      });
    }
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "/contact";
  };

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "You are the best! You put the words you want, and I would totally agree with",
      author: "N. Usama ",
      company: "Ceo of Bin nazeer fragrance ",
      rating: 5
    },
    {
      id: 2,
      text: "That's perfect! The Animation looks great for launch, thank you so much. We'll definitely reach out",
      author: "N.  Zabullah Amir",
      company: "Ceo of Coverup & pel paints",
      rating: 5
    },
    {
      id: 3,
      text: "One of the best Projects! You understood the concept. The results are realistic and fitting",
      author: "N. Taha Haseeb",
      company: "Manager of Glamur paint",
      rating: 5
    }
  ];

  // Team members data with imported images
  const teamMembers = [
    {
      id: 1,
      name: "Basil Ahmed",
      role: "3d animater",
      experience: "4+ Years",
      image: reviewImage1
    },
    {
      id: 2,
      name: "Amar Rai",
      role: "Art Director",
      experience: "3+ Years",
      image: reviewImage2
    },
    {
      id: 3,
      name: "Muhammad khizar",
      role: "3d modeler",
      experience: "1+ Years",
      image: reviewImage3
    },
    {
      id: 4,
      name: "Junaid Nawaz",
      role: "Web Designer",
      experience: "1+ Years",
      image: reviewImage4
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <LettersPullUp
            text="REVIEWS"
            className="text-4xl md:text-6xl font-bold mb-6"
          />
         
          <p className=" text-start text-gray-400 text-lg md:text-xl  mx-auto">Here's what our clients are saying about their experience working with us.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side - Stats */}
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Projects Completed */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {counters.projects}+
                </div>
                <div className="text-gray-400 text-sm md:text-base">Projects completed</div>
              </motion.div>

              {/* Countries Reached */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {counters.countries}+
                </div>
                <div className="text-gray-400 text-sm md:text-base">Countries Reached</div>
              </motion.div>

              {/* Years of Creation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {counters.years}+
                </div>
                <div className="text-gray-400 text-sm md:text-base">Years of Creation</div>
              </motion.div>

              {/* Client Satisfaction */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {counters.satisfaction}%
                </div>
                <div className="text-gray-400 text-sm md:text-base">Client Satisfaction</div>
              </motion.div>
            </div>

            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <motion.button
                onClick={handleContactClick}
                className="group relative inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-6 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold text-lg md:text-xl transition-all duration-300 shadow-2xl overflow-hidden border-2 border-purple-400/50"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(192, 132, 252, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Pulsing border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-300 rounded-full"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <span className="relative z-10 font-bold tracking-wide">Let's Talk</span>
                <div className="relative z-10 flex items-center">
                  <ArrowRight 
                    ref={arrowRef1}
                    size={24} 
                    className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" 
                  />
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[2px] rounded-3xl bg-gray-900" />
                </div>

                {/* Quote Icon */}
                <motion.div 
                  className="absolute top-6 right-6 text-purple-400 opacity-20 group-hover:opacity-40 transition-all duration-500"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Quote size={32} />
                </motion.div>

                {/* Floating Stars */}
                <motion.div 
                  className="flex gap-1 mb-4 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                        y: -2
                      }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star size={20} className="fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <motion.div 
                  className="border-t border-gray-700 pt-4 relative z-10 group-hover:border-purple-500/30 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm group-hover:text-purple-300 transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </motion.div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <LettersPullUp
              text="OUR TEAM"
              className="text-4xl md:text-6xl font-bold mb-6"
            />
          
            <p className="text-gray-400 text-start text-lg md:text-xl mx-auto">Meet the creative minds behind Futurix Visuals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                className="group text-center"
              >
                {/* Team Member Image */}
                <motion.div 
                  className="relative mx-auto mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-purple-500 transition-all duration-500"
                  whileHover={{ 
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(192, 132, 252, 0.3)"
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Team Member Info */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-semibold text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {member.experience}
                  </p>
                </motion.div>

                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
