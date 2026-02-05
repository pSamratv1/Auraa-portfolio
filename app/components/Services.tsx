// components/Services.tsx (Revised)
"use client";
import { motion } from "framer-motion";

const highEndServices = [
  {
    number: "01",
    title: "Brand Strategy",
    outcome: "Defining your visual voice to command market authority.",
  },
  {
    number: "02",
    title: "Cinematic Production",
    outcome: "High-fidelity storytelling that transforms brand perception.",
  },
  {
    number: "03",
    title: "Post-Production",
    outcome: "Precision editing and color grading for a world-class finish.",
  },
];

export default function Services() {
  return (
    <section className="py-40 bg-white text-black">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-10">
          <div className="max-w-md">
            <span className="font-sans text-[10px] uppercase tracking-widest border-b border-black pb-2">
              Capabilities
            </span>
            <h2 className="font-serif text-5xl mt-8 italic leading-tight">
              Beyond the Lens.
            </h2>
          </div>
          <p className="font-sans text-sm text-black/60 max-w-sm leading-relaxed pt-12">
            We don’t just deliver videos. We build visual assets that scale your
            business, increase trust, and drive engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highEndServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-default"
            >
              <span className="font-serif text-xl italic opacity-30 group-hover:opacity-100 transition-opacity">
                {s.number}
              </span>
              <h3 className="font-serif text-3xl my-6 border-b border-black/10 pb-4">
                {s.title}
              </h3>
              <p className="font-sans text-xs text-black/50 leading-loose group-hover:text-black transition-colors">
                {s.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
