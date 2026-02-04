"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Work", outline: true },
  { name: "Clients", outline: true },
  { name: "Directors", outline: true },
  { name: "Photographers", outline: true },
  { name: "About", outline: false },
  { name: "Contact", outline: false },
];

export default function MenuOverlay({ isOpen, onClose }: MenuProps) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-black grid grid-cols-1 md:grid-cols-12 overflow-hidden"
    >
      {/* LEFT SIDE - Content */}
      <div className="md:col-span-5 bg-[#2A2A2E] p-8 md:p-16 flex flex-col justify-between h-full">
        <header>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-60 max-w-[200px] leading-relaxed">
            Full-Service Production for Film, Photography, and Branded Content
          </p>
        </header>

        <nav className="flex flex-col space-y-2 md:space-y-4">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link
                href={`/${item.name.toLowerCase()}`}
                onClick={onClose}
                className={`font-serif text-5xl md:text-8xl transition-all duration-300 ${
                  item.outline ? "text-outline" : "text-white"
                } hover:italic`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <footer>
          <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[8px] font-bold opacity-60">
            B-CORP
          </div>
        </footer>
      </div>

      {/* RIGHT SIDE - Video/Visual Peek */}
      <div className="md:col-span-7 relative h-full bg-zinc-900 overflow-hidden">
        {/* The video from the background usually peeks through here or a new one plays */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-40 brightness-50"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-diving-into-ocean-water-14034-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Top Right Controls */}
        <div className="absolute top-8 right-8 flex items-center gap-12 text-[10px] uppercase tracking-widest font-sans">
          <button
            onClick={onClose}
            className="text-2xl hover:rotate-90 transition-transform duration-300"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
}
