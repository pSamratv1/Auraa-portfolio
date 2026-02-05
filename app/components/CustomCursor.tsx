"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouseX = useSpring(0, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect if hovering over a "Showreel" area
      const target = e.target as HTMLElement;
      const isShowreel = target.closest('[data-cursor="showreel"]');

      if (isShowreel) {
        setCursorVariant("showreel");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "#ffffff",
      border: "0px solid rgba(255,255,255,0)",
    },
    showreel: {
      height: 150,
      width: 150,
      backgroundColor: "rgba(255,255,255,0)", // Transparent fill
      border: "1px solid rgba(255,255,255,0.3)", // The border from your image
    },
    play: {
      height: 90,
      width: 90,
      backgroundColor: "#C5A059", // Auraa Gold
      mixBlendMode: "normal",
      border: "0px solid transparent",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    >
      {cursorVariant === "showreel" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center font-sans text-[10px] uppercase tracking-[0.3em] leading-tight text-white"
        >
          Our
          <br />
          Showreel
        </motion.div>
      )}
      {cursorVariant === "play" && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1 mb-1" />
          <span className="text-[8px] font-bold text-black tracking-widest ml-1">
            PLAY
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
