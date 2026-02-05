// components/Manifesto.tsx
"use client";
import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="py-40 px-8 bg-white border-y border-white/10 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="font-sans text-[10px] uppercase tracking-[0.4em] mb-12 block text-black"
        >
          Our Philosophy
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl md:text-5xl leading-relaxed text-black"
        >
          We believe that in a world of noise,{" "}
          <span className="italic text-accent">silence speaks loudest.</span>{" "}
          Our work isn&apos;t just about frames; it&apos;s about the{" "}
          <span className="text-outline-black">unseen emotion</span> that turns
          a viewer into a believer.
        </motion.h2>
      </div>
    </section>
  );
}
