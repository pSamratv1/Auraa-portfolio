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
    </motion.div>
  );
}
