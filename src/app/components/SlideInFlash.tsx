"use client";
import { motion } from "framer-motion";

const SlideInFlash = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      whileInView={{
        boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 40px rgba(255,255,255,0.8)", "0 0 0px rgba(255,255,255,0)"],
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFlash;
