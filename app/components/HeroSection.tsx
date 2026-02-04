"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Function to toggle sound
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay handled:", error);
      });
    }
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-background overflow-hidden cursor-none"
      data-cursor="showreel"
      onClick={toggleSound}
    >
      {/* The Reveal Container */}
      <motion.div
        initial={{ clipPath: "inset(20% 20% 20% 20%)", scale: 1.2 }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative w-full h-full overflow-hidden"
      >
        <motion.video
          ref={videoRef}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/Auraa.mp4" type="video/mp4" />
        </motion.video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      <div className="absolute bottom-10 right-10 z-20 w-32 flex flex-col justify-start items-start gap-3">
        <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/70">
          {isMuted ? "Click to unmute" : "Click to mute"}
        </span>
        <div className="flex items-center gap-4 justify-start">
          <div className="flex gap-[2px] items-end h-3 w-4">
            {[0.4, 0.7, 0.3, 0.9].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: isMuted ? "2px" : `${h * 100}%` }}
                transition={{
                  repeat: Infinity,
                  duration: 0.5,
                  repeatType: "reverse",
                  delay: i * 0.1,
                }}
                className="w-[2px] bg-white"
              />
            ))}
          </div>
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/70">
            {isMuted ? "Sound Off" : "Sound On"}
          </span>
        </div>
      </div>

      {/* Content Overlay - Only shows when Muted */}
      <AnimatePresence>
        {isMuted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-10 flex flex-col justify-center p-8 md:p-20 pointer-events-none"
          >
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-sans uppercase tracking-[0.5em] text-[10px] text-accent mb-4"
              >
                Auraa Productions / Cinematic Storytelling
              </motion.p>
            </div>

            <div className="overflow-hidden leading-none">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-6xl md:text-[9vw] tracking-tighter leading-none"
              >
                {/* 
                   IMPORTANT: 
                   To see the outline, remove 'text-white' from the span 
                   where you applied 'text-outline' 
                */}
                <span className="text-white text-outline">Auraa of</span> <br />
                <span className="italic text-outline">Emotion.</span>
              </motion.h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
