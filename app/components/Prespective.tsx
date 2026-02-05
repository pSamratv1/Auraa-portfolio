// components/Perspective.tsx
"use client";
import { motion } from "framer-motion";

export default function Perspective() {
  return (
    <section className="relative bg-background py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        {/* Sticky Left */}
        <div className="w-full md:w-1/2 md:sticky md:top-1/4 h-fit">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent mb-8 block">
            The Auraa Standard
          </span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-serif text-6xl lg:text-8xl text-white leading-[0.9]"
            >
              Why leading
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-serif text-6xl lg:text-8xl text-white leading-[0.9] italic"
            >
              brands choose
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-serif text-6xl lg:text-8xl text-outline leading-[0.9]"
            >
              our team.
            </motion.h2>
          </div>
        </div>

        {/* Scrolling Right */}
        <div className="w-full md:w-1/2 flex flex-col gap-32 pt-20">
          {[
            {
              t: "Cinematic Intent",
              d: "We don't just capture footage; we compose frames. Every shot is a deliberate choice to evoke a specific emotional response.",
            },
            {
              t: "Editorial Velocity",
              d: "Built on the Auraa philosophy—high-end quality doesn't have to be slow. We deliver world-class cuts with agency speed.",
            },
            {
              t: "Outcome Driven",
              d: "Visuals are vanity if they don't convert. Our productions are strategically mapped to your brand's growth objectives.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group"
            >
              <span className="font-serif text-5xl italic text-accent/20 group-hover:text-accent transition-colors">
                0{i + 1}
              </span>
              <h3 className="font-serif text-3xl text-white mt-4 mb-6">
                {v.t}
              </h3>
              <p className="font-sans text-sm text-white/50 leading-relaxed max-w-sm">
                {v.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
