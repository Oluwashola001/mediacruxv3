"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const rotatingTexts = [
  "Convert in 48 Hours",
  "Double Your Revenue",
  "Drive Instant Growth"
];

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentFullText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-3 sm:px-4 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
          AI Ads Built to{" "}
          <span className="text-[#00FF00] inline-block min-w-[280px] sm:min-w-[400px] md:min-w-[500px] text-left">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-0.5 h-8 sm:h-10 md:h-14 bg-[#00FF00] ml-1 align-middle"
            />
          </span>
        </h1>
        <p className="text-white text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
          We deliver scroll-stopping AI videos that hook audiences, get boosted
          by algorithms, and cut your customer acquisition cost.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#contact"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="inline-block relative overflow-hidden w-full sm:w-auto px-10 py-5 text-white font-bold text-sm sm:text-base tracking-widest uppercase rounded-full border-2 border-white/40 transition-all duration-500 hover:border-[#00FF00] hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group"
          >
            <motion.div
              className="absolute inset-0 bg-[#00FF00]"
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ 
                scale: isHovering ? 2.5 : 0,
                borderRadius: isHovering ? "0%" : "100%"
              }}
              transition={{ 
                duration: 0.7,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              style={{ 
                transformOrigin: "center",
              }}
            />
            <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
              Get 1 AI Ad in 48 Hours
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll indicator */}
<motion.div
  className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
>
  <motion.div
    className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
    animate={{ opacity: [0.4, 1, 0.4] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    <motion.span 
      className="block w-1.5 h-1.5 rounded-full bg-white"
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    />
  </motion.div>
  <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
</motion.div>
    </section>
  );
}