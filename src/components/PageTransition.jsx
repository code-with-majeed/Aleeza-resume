import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => (
  <motion.main
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35 }}
    className="min-h-screen"
  >
    {children}
  </motion.main>
);

export default PageTransition;
