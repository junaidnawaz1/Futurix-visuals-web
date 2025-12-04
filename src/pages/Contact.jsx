import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, ArrowRight, MessageCircle } from "lucide-react";
import {LettersPullUp} from "../components/LettersPullUp";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // <-- NEW

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 UPDATED FORM SUBMIT (Formspree)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xqaooykz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
      setFormData({
        subject: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      setStatus("ERROR");
    }
  };

  const handleQuickCall = () => {
    window.open("tel:+923322044474", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/923322044474", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/futurixvisuals?igsh=OG9tNzQ1aDV5OHV2", "_blank");
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "mailto:futurixvisuals@gmail.com";
  };

  return (
    <section className="w-full min-h-screen pt-32 pb-20 px-6 md:px-12 text-black font-sans ">

      {/* TITLE */}
      <div className="mb-16">
        <LettersPullUp
          text="GET IN TOUCH"
          className="text-4xl md:text-7xl font-bold mb-4"
        />
        <p className="text-purple-600 text-lg md:text-xl">
          Don't be afraid to say hello with us!
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

        {/* LEFT SIDE CONTACT OPTIONS */}
        <div className="space-y-8">
          <motion.button
            onClick={handleQuickCall}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-sm flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            <Phone size={20} />
            <span className="font-semibold">Book a quick Call</span>
          </motion.button>

          <p className="text-gray-400 text-center max-w-sm">or</p>

          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-sm flex items-center justify-center gap-3 border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle size={20} />
            <span className="font-semibold">Chat via Whatsapp</span>
          </motion.button>

          {/* CONTACT INFO */}
          <div className="mt-12 space-y-8">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 group cursor-pointer"
              onClick={handleQuickCall}
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/40 transition-all duration-300 border border-purple-500/30">
                <Phone size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-black text-sm">Phone</p>
                <p className="font-medium text-black group-hover:text-purple-800 ">+92 3322044474</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 group cursor-pointer relative z-50"
              onClick={handleEmailClick}
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/40 transition-all duration-300 border border-purple-500/30">
                <Mail size={20} className="text-purple-800" />
              </div>
              <div>
                <p className="text-black text-sm">Email</p>
                <p className="font-medium text-black group-hover:text-purple-800 transition-colors">futurixvisuals@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 group cursor-pointer"
              onClick={handleInstagram}
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/40 transition-all duration-300 border border-purple-500/30">
                <Instagram size={20} className="text-purple-800" />
              </div>
              <div>
                <p className="text-black text-sm">Instagram</p>
                <p className="font-medium text-black group-hover:text-purple-800 transition-colors">@futurixvisuals</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl shadow-2xl border border-purple-500/20 w-full"
        >
          <form onSubmit={handleSubmit} className="space-y-8">

  {/* SUBJECT */}
  <div>
    <label className="text-gray-300 text-sm">Subject</label>
    <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      className="w-full mt-2 p-4 rounded-xl bg-gray-800/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
      placeholder="What is this about?"
    />
  </div>

  {/* NAME FIELDS */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div>
      <label className="text-gray-300 text-sm">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full mt-2 p-4 rounded-xl bg-gray-800/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
        placeholder="John"
      />
    </div>

    <div>
      <label className="text-gray-300 text-sm">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="w-full mt-2 p-4 rounded-xl bg-gray-800/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
        placeholder="Doe"
      />
    </div>

  </div>

  {/* EMAIL */}
  <div>
    <label className="text-gray-300 text-sm">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full mt-2 p-4 rounded-xl bg-gray-800/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
      placeholder="you@example.com"
    />
  </div>

  {/* PHONE */}
  <div>
    <label className="text-gray-300 text-sm">Phone Number</label>
    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className="w-full mt-2 p-4 rounded-xl bg-gray-800/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all"
      placeholder="+92..."
    />
  </div>

  {/* MESSAGE */}
  <div>
    <label className="text-gray-300 text-sm">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      rows="5"
      className="w-full mt-2 p-4 rounded-xl bg-gray-800/50 border border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 outline-none transition-all resize-none"
      placeholder="Write your message..."
    ></textarea>
  </div>

  {/* Submit Button */}
  <div className="flex justify-center pt-4">
    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/25"
    >
      Send Message
      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ArrowRight size={20} />
      </motion.div>
    </motion.button>
  </div>

  {/* SUCCESS / ERROR MESSAGE */}
  {status === "SUCCESS" && (
    <p className="text-green-400 text-center pt-4">
      Message sent successfully! ✔
    </p>
  )}

  {status === "ERROR" && (
    <p className="text-red-400 text-center pt-4">
      Something went wrong. Try again.
    </p>
  )}

</form>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

