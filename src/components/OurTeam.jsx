// import React from 'react';
// import { motion } from 'framer-motion';

// // Import team member images
// import teamMember1 from '../assets/review-image1.jpg';
// import teamMember2 from '../assets/review-image2.jpg';
// import teamMember3 from '../assets/review-image3.jpg';
// import teamMember4 from '../assets/review-image4.jpg';
// import { LettersPullUp } from './LettersPullUp';
// import { NavLink } from 'react-router-dom';
// const MotionNavLink = motion(NavLink);
// const OurTeam = () => {
//     const teamMembers = [
//         {
//             id: 1,
//             name: "Basil Ahmed",
//             role: "3d animater",
//             experience: "4+ Years",
//             image: teamMember1
//         },
//         {
//             id: 2,
//             name: "Amar Rai",
//             role: "Art Director",
//             experience: "3+ Years",
//             image: teamMember2
//         },
//         {
//             id: 3,
//             name: "Muhammad khizar",
//             role: "3d modeler",
//             experience: "1+ Year",
//             image: teamMember3
//         },
//         {
//             id: 4,
//             name: "Junaid Nawaz",
//             role: "Web Designer & Developer",
//             experience: "1+ Year",
//             image: teamMember4
//         }
//     ];

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { x: 50, opacity: 0 },
//         visible: {
//             x: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.6,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return (
//         <section id="team" className="py-16 md:py-28 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
//                 <div className="flex flex-col lg:flex-row items-start gap-12">
                    
//                     {/* Left Side - Header */}
//                     <motion.div 
//                         className="lg:w-2/5"
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                     >
//                         {/* <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
//                             Meet The Team
//                         </h2> */}
//                         <LettersPullUp
//                             text="Meet The Team"
//                             className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
//                         />
//                         <p className="text-lg text-gray-600 mb-8">
//                             The creative minds behind our success. Passionate professionals dedicated to delivering excellence.
//                         </p>
                        
//                         {/* Experience Summary */}
//                         <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
//                             <h3 className="text-xl font-bold text-purple-900 mb-4">Our Expertise</h3>
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-purple-600">4+</div>
//                                     <div className="text-sm text-purple-800">Years Max</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-2xl font-bold text-purple-600">27+</div>
//                                     <div className="text-sm text-purple-800">Projects</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Right Side - Team Cards */}
//                     <motion.div 
//                         className="lg:w-3/5 w-full"
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                     >
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             {teamMembers.map((member) => (
//                                 <motion.div
//                                     key={member.id}
//                                     variants={itemVariants}
//                                     className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
//                                     whileHover={{ y: -5 }}
//                                 >
//                                     {/* Image Container */}
//                                     <div className="flex">
//                                         <div className="w-1/3">
//                                             <img
//                                                 src={member.image}
//                                                 alt={member.name}
//                                                 className="w-full h-32 object-cover"
//                                             />
//                                         </div>
                                        
//                                         {/* Content */}
//                                         <div className="w-2/3 p-4">
//                                             <h3 className="text-lg font-bold text-gray-900 mb-1">
//                                                 {member.name}
//                                             </h3>
//                                             <p className="text-purple-600 font-semibold text-sm mb-2">
//                                                 {member.role}
//                                             </p>
//                                             <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold inline-block">
//                                                 {member.experience} Experience
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Purple Accent */}
//                                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600" />
//                                 </motion.div>
//                             ))}
//                         </div>

//                         {/* CTA Button */}
//                        <motion.div 
//     className="mt-8 text-right"
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6, delay: 0.4 }}
//     viewport={{ once: true }}
// >
//     {/* MODIFIED: Replaced motion.button and wrapped NavLink with motion */}
//     <MotionNavLink
//         to="/contact" // Target path
//         // Apply button classes and motion props directly to MotionNavLink
//         className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg shadow-purple-500/30"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//     >
//         Get In Touch
//     </MotionNavLink>
// </motion.div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurTeam;
import React from 'react';
import { motion } from 'framer-motion';

// Import team member images
import teamMember1 from '../assets/review-image1.jpg';
import teamMember2 from '../assets/review-image2.jpg';
import teamMember3 from '../assets/review-image3.jpg';
import teamMember4 from '../assets/review-image4.jpg';

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Basil Ahmad",
            role: "3D Animator",
            experience: "4+ Years",
            image: teamMember1
        },
        {
            id: 2,
            name: "Amar Rai",
            role: "CEO & Art Director",
            experience: "3+ Years",
            image: teamMember2
        },
        {
            id: 3,
            name: "Muhammad Khizar",
            role: "3D Modeler",
            experience: "1+ Year",
            image: teamMember3
        },
        {
            id: 4,
            name: "Junaid Nawaz",
            role: "Web Designer & Developer",
            experience: "1+ Year",
            image: teamMember4
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="team" className="py-16 md:py-24 bg-gradient-to-br from-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                        MEET THE TEAM
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        The creative minds behind our success. Passionate professionals dedicated to delivering excellence.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={itemVariants}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-purple-100"
                            whileHover={{ y: -8 }}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay with Experience on Hover */}
                                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/80 transition-all duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <motion.div
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-center text-white"
                                        >
                                            <div className="text-5xl font-black mb-2">
                                                {member.experience.split('+')[0]}+
                                            </div>
                                            <div className="text-xl font-bold">
                                                Years Experience
                                            </div>
                                            <div className="text-sm text-purple-200 mt-2">
                                                Professional expertise
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-purple-600 font-medium">
                                    {member.role}
                                </p>
                            </div>

                            {/* Purple Accent Border Bottom */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-purple-600 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-600 text-lg mb-6">
                        Ready to work with our amazing team?
                    </p>
                    <motion.button
                        className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg shadow-purple-500/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default OurTeam;