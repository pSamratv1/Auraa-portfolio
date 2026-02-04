// components/Navbar.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-end ">
        <Link href="/" className="group">
          <h1 className="font-serif text-3xl tracking-tighter text-white">
            Auraa<span className="text-accent italic">.</span>
          </h1>
          <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
        </Link>

        <div className="flex justify-end gap-12">
          <div className="flex gap-8 font-sans text-[10px] uppercase tracking-[0.3em] text-white/80">
            {["Work", "Studio", "Journal", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-white transition-colors cursor-none"
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="group flex flex-col gap-1.5 items-end justify-center"
          >
            <div className="h-px w-8 bg-white group-hover:w-8 transition-all" />
            <div className="h-px w-5 bg-white group-hover:w-8 transition-all" />
          </button>
        </div>
      </nav>
      {/* The Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
