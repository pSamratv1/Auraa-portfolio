// components/VideoShowcase.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CinematicPlayer from "./videoplayer/CinematicVideoPlayer";

const films = [
  {
    id: 1,
    title: "The Peru Lights",
    client: "NIKE",
    // Public Stock Video 1
    loopSrc: "https://www.youtube.com/watch?v=1La4QzGeaaQ",
    fullVideoSrc: "https://www.youtube.com/watch?v=1La4QzGeaaQ",
    category: "Commercial / Fast Cut",
    featured: true,
  },
  {
    id: 2,
    title: "Quiet Solitude",
    client: "VOGUE",
    // Public Stock Video 2
    loopSrc:
      "https://player.vimeo.com/external/494252666.sd.mp4?s=72973565e31e670404097f4d715974f174e92eb8&profile_id=165&oauth2_token_id=57447761",
    fullVideoSrc:
      "https://player.vimeo.com/external/494252666.sd.mp4?s=72973565e31e670404097f4d715974f174e92eb8&profile_id=165&oauth2_token_id=57447761",
    category: "Editorial / Color Grade",
    featured: false,
  },
  {
    id: 3,
    title: "Alpine Peaks",
    client: "REDBULL",
    // Public Stock Video 3
    loopSrc:
      "https://player.vimeo.com/external/391585805.sd.mp4?s=63ef76878e35f8d975e581e264585ee3f433722a&profile_id=164&oauth2_token_id=57447761",
    fullVideoSrc:
      "https://player.vimeo.com/external/391585805.sd.mp4?s=63ef76878e35f8d975e581e264585ee3f433722a&profile_id=164&oauth2_token_id=57447761",
    category: "Action / Adventure",
    featured: false,
  },
];

export default function VideoShowcase() {
  const [activeFilm, setActiveFilm] = useState<(typeof films)[0] | null>(null);

  return (
    <section className="py-32 bg-background px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20  pb-10">
          <h2 className="font-serif text-5xl md:text-7xl text-white italic">
            Selected <span className="text-outline">Films</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {films.map((film) => (
            <div
              key={film.id}
              className={`group relative overflow-hidden bg-zinc-900 cursor-pointer ${
                film.featured ? "md:col-span-2 aspect-video" : "aspect-[4/5]"
              }`}
              onClick={() => setActiveFilm(film)}
              data-cursor="play"
            >
              {/* VIDEO TAG: Crucial attributes for it to show/play */}
              <video
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              >
                <source src={film.loopSrc} type="video/mp4" />
              </video>

              {/* OVERLAY: This makes text visible even if video is bright */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

              {/* CONTENT: Visible at all times, but animates slightly on hover */}
              <div className="absolute bottom-8 left-8 z-10">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-accent mb-2">
                  {film.client}
                </p>
                <h3 className="font-serif text-3xl text-white group-hover:italic transition-all duration-500">
                  {film.title}
                </h3>
                <div className="h-px w-0 group-hover:w-full bg-accent mt-2 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeFilm && (
          <CinematicPlayer
            src={activeFilm.fullVideoSrc}
            title={activeFilm.title}
            isOpen={true}
            onClose={() => setActiveFilm(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
