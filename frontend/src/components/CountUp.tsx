"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

export function CountUp({ value, suffix = "", decimals = 0 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(value);
  const rounded = useTransform(motionValue, (latest) => `${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    motionValue.set(1);
    const controls = animate(motionValue, value, { duration: 1.4, ease: [0.21, 0.47, 0.32, 0.98] });
    return controls.stop;
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
