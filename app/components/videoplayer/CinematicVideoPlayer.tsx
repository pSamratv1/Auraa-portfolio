// components/CinematicVideoPlayer.tsx
"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface PlayerProps {
  src: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CinematicPlayer({
  src,
  title,
  isOpen,
  onClose,
}: PlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] bg-black flex items-center justify-center p-4 md:p-12 "
      data-cursor="play"
    >
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-white/50 hover:text-white uppercase text-[10px] tracking-widest z-[510]"
      >
        Close [esc]
      </button>

      <div className="relative w-full h-full max-w-6xl flex flex-col justify-center">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          className="w-full h-full object-contain shadow-2xl"
          onClick={togglePlay}
          onTimeUpdate={() =>
            setProgress(
              (videoRef.current!.currentTime / videoRef.current!.duration) *
                100,
            )
          }
        />

        {/* Custom UI Controls */}
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="font-sans text-[9px] uppercase tracking-widest text-accent mb-2">
                Viewing Film
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-white italic">
                {title}
              </h2>
            </div>
            <button
              onClick={togglePlay}
              className="text-white uppercase text-[10px] tracking-widest border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>

          {/* Branded Progress Bar */}
          <div className="w-full h-[1px] bg-white/10 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
