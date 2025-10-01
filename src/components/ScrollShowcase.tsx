"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";


const scenes = [
  {
    id: 1,
    title: "Scene 1 – The Before",
    image: "/scenes/scene1.webp",
    text: "A customer struggling with a problem… setting the stage for transformation.",
  },
  {
    id: 2,
    title: "Scene 2 – The Solution",
    image: "/scenes/scene2.webp",
    text: "The AI-generated character introduces the solution with clarity and impact.",
  },
  {
    id: 3,
    title: "Scene 3 – The Transformation",
    image: "/scenes/scene3.webp",
    text: "Dynamic visuals highlight the benefits of the product or service.",
  },
  {
    id: 4,
    title: "Scene 4 – The Hook",
    image: "/scenes/scene4.webp",
    text: "A cinematic close to keep audiences engaged until the end.",
  },
];

export default function ScrollShowcase() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <section id="projects" className="w-full bg-black text-white pb-18">
      {/* Section 1: Client Request */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16 py-24 bg-gradient-to-b from-black to-gray-900">
      
        {/* Spline Embed */}
        <motion.div 
          className="w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <iframe
            src="https://my.spline.design/cybermannequin-js0QHdlX0Nq1hfL2XtQkwB2j/"
            frameBorder="0"
            className="w-full h-full rounded-2xl shadow-lg"
          ></iframe>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-left md:text-left space-y-6 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            What The <span className="text-[#00FF00]">Client</span> Want
          </motion.h2>
        
          <motion.p 
            className="text-gray-300 text-lg md:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            The client needed a persuasive script to promote{" "}
            <span className="text-white font-semibold">Nurp's trading software</span>.  
            The story begins with the frustration of manual trading, transitions into the 
            confidence and results gained through algorithmic investing, and concludes with 
            lifestyle freedom — golfing, surfing, and quality time with loved ones.  
            A cinematic "before-and-after" journey designed to inspire trust, aspiration, 
            and action.
          </motion.p>

          {/* Animated Arrow with Link */}
          <motion.div
            className="w-full flex justify-center md:justify-end pt-6"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://docs.google.com/document/d/1iH8l6ga59MSkL6vkaCNg12EUHMGqaYwn4nUuq1x23Dc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Label */}
              <span className="mb-2 text-white text-base md:text-xl font-medium tracking-wide group-hover:text-[#00FF00] transition-colors duration-300">
                View Script
              </span>

              {/* Arrow */}
              <motion.svg
                width="80"
                height="50"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group-hover:translate-x-2 transition-transform duration-300"
              >
                <path
                  d="M10 30 L70 30 M70 30 L55 20 M70 30 L55 40"
                  stroke="#00FF00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Section 2: What We Delivered */}
      <div className="min-h-screen flex flex-col items-center justify-start pt-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          What We <span className="text-[#00FF00]">Delivered</span>
        </motion.h2>

        {/* Scene showcase */}
        <div className="w-full flex flex-col gap-24">
          {scenes.map((scene, index) => (
            <SceneBlock key={scene.id} scene={scene} flip={index % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* Section 3: Final Video */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-12 md:px-16 bg-gradient-to-t from-black to-gray-900">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[#00FF00]">Final</span> Video
        </motion.h2>
        <motion.div
          className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.85, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <iframe
            src="https://www.youtube.com/embed/yXDb0URplWI?autoplay=1&mute=1&loop=1&playlist=yXDb0URplWI"
            title="Final Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
        <motion.a
          href="#contact"
          className="mt-8 inline-block relative overflow-hidden px-10 py-5 text-white font-bold rounded-full border-2 border-white/40 transition-all duration-500 hover:border-[#00FF00] hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] group"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.5, duration: 1 }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
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
            Ready in 48 Hours – Get Yours
          </span>
        </motion.a>
      </div>
    </section>
  );
}

function SceneBlock({ scene, flip }: { scene: any; flip: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center px-6 md:px-16 gap-10`}
    >
      {/* Image */}
      <motion.div
        className="relative w-full md:w-1/2 h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: flip ? 100 : -100, rotateY: flip ? 15 : -15 }}
        animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: flip ? 100 : -100, rotateY: flip ? 15 : -15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotateY: flip ? -5 : 5, transition: { duration: 0.3 } }}
      >
        <Image
          src={scene.image}
          alt={scene.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: flip ? -100 : 100, y: 30 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: flip ? -100 : 100, y: 30 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.h3 
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {scene.title}
        </motion.h3>
        <motion.p 
          className="text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {scene.text}
        </motion.p>
      </motion.div>
    </div>
  );
}