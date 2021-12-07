import React from "react";
import { motion } from "framer-motion";

const titleVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  whileTap: { scale: 0.95, rotate: 2 },
};

export default function ThemeSwitch() {
  return (
    <motion.div id="theme-bg">
      <motion.h1
        id="theme-title"
        initial="initial"
        animate="animate"
        whileTap="whileTap"
        variants={titleVariants}
        transition={{ duration: 0.7 }}
      >
        theme
      </motion.h1>
      <button>change theme</button>
    </motion.div>
  );
}
