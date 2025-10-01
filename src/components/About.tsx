"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function About() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id= "about" className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full flex items-center justify-center px-6 md:px-16 pt-32 pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            We Create <span className="text-[#00FF00]">AI Ads</span> That Convert
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            MediaCrux is your partner in cutting-edge AI-powered video advertising. 
            We don't just make videos—we engineer conversion machines.
          </motion.p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="relative w-full flex items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#00FF00]">Mission</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              To revolutionize digital advertising by combining artificial intelligence 
              with human creativity, delivering scroll-stopping content that drives 
              real business results.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Every brand deserves advertising that works. We make that happen in 48 hours.
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#00FF00]/20 to-transparent border border-[#00FF00]/30"
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl font-bold text-[#00FF00]/10">AI</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative w-full flex items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            Why Choose <span className="text-[#00FF00]">MediaCrux</span>?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Fast",
                description: "48-hour turnaround from brief to final video. No endless revisions, no delays.",
                icon: "⚡"
              },
              {
                title: "AI-Powered",
                description: "We leverage cutting-edge AI to create videos that algorithms love and audiences can't ignore.",
                icon: "🤖"
              },
              {
                title: "Conversion Focused",
                description: "Every frame is designed to hook, engage, and convert. We optimize for results, not vanity metrics.",
                icon: "📈"
              },
              {
                title: "Algorithm Boosted",
                description: "Our videos are engineered to get maximum reach on social platforms organically.",
                icon: "🚀"
              },
              {
                title: "Cost Effective",
                description: "Lower your customer acquisition cost with ads that actually perform.",
                icon: "💰"
              },
              {
                title: "Scroll Stopping",
                description: "Content so engaging, thumbs freeze mid-scroll. That's our standard.",
                icon: "🎯"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00FF00]/50 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10, rotateX: 5 }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#00FF00]">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
}