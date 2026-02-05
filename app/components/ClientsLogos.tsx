"use client";
import { motion } from "framer-motion";

// High-quality SVG URLs for the demo.
// Later, you will download your clients' SVG logos and put them in your /public folder.
const logos = [
  {
    name: "Sony",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Sony_logo.svg",
  },
  {
    name: "Vogue",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Vogue_logo.svg",
  },
  {
    name: "Nike",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Mercedes",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  },
  {
    name: "BBC",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/BBC_blocks_dark_mode.svg",
  },
  {
    name: "RedBull",
    src: "https://upload.wikimedia.org/wikipedia/en/f/f5/RedBull_Energy_Drink_logo.svg",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-24 bg-background border-y border-white/10 relative flex flex-col items-center overflow-hidden cursor-none">
      {/* Premium Micro-Copy */}
      <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 mb-16 text-center">
        Trusted by global visionaries
      </p>

      {/* 
        The "Edge Fade" Mask 
        This CSS trick fades the left and right edges to black so the logos emerge smoothly
      */}
      <div
        className="w-full max-w-8xl overflow-hidden relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <motion.div
          // Animate to exactly -50% to create a flawless, invisible loop
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex w-fit items-center gap-24 md:gap-40 px-12"
        >
          {/* We duplicate the array to create the endless scrolling effect */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="w-32 md:w-40 flex-shrink-0 flex items-center justify-center group"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                // 'brightness(0) invert(1)' forces colored/black SVGs to become pure white
                className="w-full h-auto  object-contain opacity-30 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
