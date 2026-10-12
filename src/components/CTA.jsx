import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const CTA = () => (
  <section className="container-x py-16">
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600/30 via-ink-800 to-accent-500/30 p-10 text-center sm:p-16">
        <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl animate-blob" />
        <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
          Looking for a detail-oriented QA tester?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
          Let's talk about how I can help your team ship better, more reliable software.
        </p>
        <Link to="/contact" className="btn-primary relative mt-8">Let's connect</Link>
      </div>
    </Reveal>
  </section>
);

export default CTA;
