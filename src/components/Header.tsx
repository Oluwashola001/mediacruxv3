"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
          <Image
            src="/logo.png"
            alt="Client Logo"
            width={40}
            height={40}
            className="object-contain transition-transform duration-300 group-hover:scale-110 md:w-12 md:h-12"
          />
          <span className="text-white font-bold text-xl md:text-2xl tracking-tight uppercase">Mediacrux</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-sm lg:text-base font-medium tracking-wide lg:tracking-widest uppercase transition-all duration-300 hover:text-[#00FF00] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#contact"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="ml-4 lg:ml-6 px-6 lg:px-10 py-3 lg:py-4 relative overflow-hidden text-white font-bold text-sm lg:text-base tracking-wide lg:tracking-widest uppercase rounded-full border-2 border-white/30 transition-all duration-500 group"
          >
            <motion.div
              className="absolute inset-0 bg-[#00FF00]"
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ 
                scale: isHovering ? 2 : 0,
                borderRadius: isHovering ? "0%" : "100%"
              }}
              transition={{ 
                duration: 0.9,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              style={{ 
                transformOrigin: "center",
              }}
            />
            <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
              Book a Call
            </span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center relative z-[60]">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <HiX className="text-white w-8 h-8" />
            ) : (
              <HiMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[55] md:hidden"
          >
            <motion.div 
              className="flex flex-col items-center justify-center h-full space-y-8 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-white text-2xl font-medium tracking-wide uppercase transition-all duration-300 hover:text-[#00FF00] block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  href="#contact"
                  className="px-10 py-4 bg-[#00FF00] text-black font-bold text-base tracking-wide uppercase rounded-full hover:bg-[#00DD00] transition-all duration-300 inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Call
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}