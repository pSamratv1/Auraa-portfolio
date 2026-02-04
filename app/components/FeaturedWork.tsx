// components/FeaturedWork.tsx
"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Silent Peak",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80",
  },
  {
    title: "Velvet Nights",
    category: "Music Video",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
  },
  {
    title: "Urban Pulse",
    category: "Branded Content",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-32 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="font-serif text-5xl md:text-7xl italic">
            Selected
            <br />
            Works
          </h2>
          <p className="font-sans text-[10px] uppercase tracking-widest opacity-50 mb-4">
            01 — 03
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`group cursor-none relative overflow-hidden ${i === 1 ? "md:mt-32" : ""}`}
            >
              <div className="overflow-hidden aspect-[4/5] bg-zinc-900">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="mt-6">
                <p className="font-sans text-[10px] uppercase tracking-widest text-accent mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-3xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
