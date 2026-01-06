"use client";
import Main from "@/components/Main";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-blur ">
      <div className="">
        <motion.div
          className=" sticky top-0 left-0 right-0 h-1 bg-red-700 origin-left"
          style={{ scaleX }}
        />

        <Main />
      </div>
    </div>
  );
}
