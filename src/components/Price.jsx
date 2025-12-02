import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js';
import { ArrowRight, Check, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LettersPullUp } from './LettersPullUp';

// --- Color & Style Configuration ---
const COLORS = {
    darkBg: '#0F172A',
    cardBg: '#FFFFFF',
    textDark: '#111827',
    textGrey: '#4B5563',
    purpleAccent: '#7C3AED',
    purpleLight: '#8B5CF6',
    purpleDark: '#5B21B6',
    lightBg: '#F9FAFB',
};

// --- GSAP Letter Pull-Off Component ---
const LetterPullUp = ({ text, className }) => {
    const lettersRef = useRef([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        if (!wrapperRef.current || !gsap) return;

        const handleMouseEnter = () => {
            gsap.to(lettersRef.current, {
                y: -10,
                opacity: 0,
                duration: 0.3,
                stagger: 0.03,
                ease: "power2.in",
                overwrite: true,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(lettersRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: {
                    each: 0.03,
                    from: "end" 
                },
                ease: "power2.out",
                overwrite: true,
            });
        };

        const wrapper = wrapperRef.current;
        wrapper.addEventListener('mouseenter', handleMouseEnter);
        wrapper.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            wrapper.removeEventListener('mouseenter', handleMouseEnter);
            wrapper.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <h1 ref={wrapperRef} className={`inline-block cursor-pointer ${className}`}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    ref={el => lettersRef.current[index] = el}
                    className="inline-block relative transition-transform duration-100"
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h1>
    );
};

// --- Pricing Card Component ---
const PricingCard = ({ title, price, period, description, features, isFeatured = false }) => {
    const navigate = useNavigate();
    
    const handleGetStarted = () => {
        navigate('/contact');
    };

    return (
        <motion.div
            className={`w-full max-w-xs rounded-3xl overflow-hidden transition-all duration-500
                ${isFeatured 
                    ? `bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 shadow-2xl shadow-purple-500/30` 
                    : 'bg-white border border-gray-100 shadow-lg'
                }
                p-0.5 relative
            `}
            whileHover={{ 
                y: isFeatured ? -6 : -2, 
                scale: isFeatured ? 1.02 : 1.01
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
            <div className={`
                p-6 rounded-[1.15rem] h-full flex flex-col justify-between
                ${isFeatured ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} text-gray-900
            `}>
                
                {/* Featured Badge - Inside the card */}
                {isFeatured && (
                    <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                            Best Value
                        </div>
                    </div>
                )}
                
                {/* Header */}
                <div className="pt-1">
                    <h2 className="text-xl font-bold mb-1.5 text-gray-900">{title}</h2>
                    <p className={`text-4xl font-extrabold mb-1 ${isFeatured ? 'text-purple-600' : 'text-gray-900'}`}>
                        {price}
                    </p>
                    <p className="text-gray-600 text-sm inline-flex items-baseline">
                        <span className="text-lg mr-1 font-bold">{period}</span>
                        {isFeatured ? (
                             <span className='text-gray-500 text-xs'>(billed monthly)</span>
                        ) : (
                             <span className='text-gray-500 text-xs'>starting price</span>
                        )}
                    </p>
                    <p className="text-gray-600 mt-3 mb-6 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Button */}
                <motion.button
                    onClick={handleGetStarted}
                    className={`
                        w-full py-3 mt-auto rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all
                        ${isFeatured 
                            ? 'bg-purple-600 text-white hover:bg-purple-700' 
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }
                        shadow-md
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Get Started
                    <ArrowRight size={16} className="ml-1" />
                </motion.button>

                {/* Features */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-gray-900">Whats included?</h3>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700 font-medium">
                                {feature.included ? (
                                    <Check size={16} className={`mr-2 mt-0.5 min-w-4 ${isFeatured ? 'text-purple-600' : 'text-gray-900'}`} />
                                ) : (
                                    <Minus size={16} className="mr-2 mt-0.5 min-w-4 text-gray-400" />
                                )}
                                <span className="leading-tight">{feature.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Pricing Section Component ---
const Pricing = () => {
    const navigate = useNavigate();
    
    const oneTimePlan = {
        title: "One-Time",
        price: "$1,299",
        period: "", 
        description: "For focused, one-time work, ideal for product launches, other standalone projects.",
        features: [
            { included: true, text: "Fixed scope and timeline" },
            { included: true, text: "10 days delivery *" },
            { included: true, text: "Unlimited revisions within scope" },
            { included: true, text: "All required formats" },
        ],
        isFeatured: false,
    };

    const membershipPlan = {
        title: "Membership",
        price: "$2,899",
        period: "/month",
        description: "Ideal for startups, growing brands, and marketing teams needing consistent creative support.",
        features: [
            { included: true, text: "Unlimited requests" },
            { included: true, text: "One active request at a time" },
            { included: true, text: "6-day delivery*" },
            { included: true, text: "Unlimited revisions" },
            { included: true, text: "Brand consistency" },
            { included: true, text: "Pause or cancel anytime" },
        ],
        isFeatured: true,
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div id="pricing-section" className="bg-gray-50 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-4 lg:px-6">
                
                {/* Header & Description */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
                    <div className="mb-6 md:mb-0">
                        <LetterPullUp 
                            text="PRICING " 
                            className="text-4xl md:text-8xl font-black text-gray-900"
                        />
                    </div>
                    <p className="text-base text-gray-600 max-w-md font-medium">
                        flexible, clear and built around your creative needs
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8">
                    <PricingCard {...oneTimePlan} />
                    <PricingCard {...membershipPlan} isFeatured={true} />
                </div>

                {/* Footer Inquiry Card */}
                <div className="mt-16 flex justify-center">
                    <div className="max-w-lg w-full flex items-center justify-between p-5 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex-1">
                            <p className="text-base font-medium text-gray-900">
                                Not sure which one fits?
                            </p>
                            <p className="text-gray-600 text-xs mt-1">
                                Book a quick call — we'll guide you through it or tailor a Custom plan for you.
                            </p>
                        </div>
                        <motion.button
                            onClick={handleContactClick}
                            className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 flex-shrink-0 ml-4"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowRight size={18} />
                        </motion.button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;