import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, subtitle }) => (
  <header className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
    <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl animate-blob" />
    <div className="container-x relative text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-400"
      >
        {eyebrow}
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl"
      >
        <span className="gradient-text">{title}</span>
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-slate-400 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </header>
);

export default PageHeader;
