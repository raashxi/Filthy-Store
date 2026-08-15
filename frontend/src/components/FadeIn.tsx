"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const directionOffset = {
    up: 20,
    down: -20,
    left: 20,
    right: -20,
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
        x: direction === "left" || direction === "right" ? directionOffset[direction] : 0,
      }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom easing for a premium, buttery feel
      }}
    >
      {children}
    </motion.div>
  );
}