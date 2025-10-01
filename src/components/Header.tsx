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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/logo.png"
            alt="Client Logo"
            width={48}
            height={48}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-white font-bold text-2xl tracking-tight uppercase">Mediacrux</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-base font-medium tracking-widest uppercase transition-all duration-300 hover:text-[#00FF00] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#contact"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="ml-6 px-10 py-4 relative overflow-hidden text-white font-bold text-base tracking-widest uppercase rounded-full border-2 border-white/30 transition-all duration-500 group"
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
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-white/5 rounded-lg transition-all duration-200"
          >
            {isOpen ? <HiX className="text-white w-8 h-8" /> : <HiMenu className="text-white w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-8 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg font-medium tracking-widest uppercase transition-all duration-300 hover:text-[#00FF00] hover:pl-3"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="px-10 py-4 bg-transparent text-white font-bold text-base tracking-widest uppercase rounded-full border-2 border-white/30 hover:bg-[#00FF00] hover:text-black hover:border-[#00FF00] transition-all duration-500 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}