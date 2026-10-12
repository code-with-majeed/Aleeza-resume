import React from "react";
import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, subtitle, center = false }) => (
  <Reveal className={`mb-12 ${center ? "text-center" : ""}`}>
    {eyebrow && (
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    {subtitle && <p className={`mt-3 max-w-2xl text-slate-400 sm:text-lg ${center ? "mx-auto" : ""}`}>{subtitle}</p>}
    <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-400 to-accent-500 ${center ? "mx-auto" : ""}`} />
  </Reveal>
);

export default SectionHeading;
