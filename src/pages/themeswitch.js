import React from "react";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  return (
    <motion.h1
      id="theme-title"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
    >
      theme
    </motion.h1>
  );
}
