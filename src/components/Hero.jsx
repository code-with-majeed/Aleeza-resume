import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiLinkedin, FiCheckCircle } from "react-icons/fi";
import { profile } from "../data/cv";

const Typed = ({ words }) => {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1100);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((n) => n + 1);
          }
        }
      },
      del ? 40 : 85
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="text-brand-400">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

const checks = ["Login flow", "Form validation", "Cross-browser", "API response"];

const Hero = () => (
  <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
    <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl animate-blob" />
    <div className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl animate-blob [animation-delay:4s]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px]" />

    <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="chip inline-flex items-center gap-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
          Open to entry-level QA roles
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-6xl"
        >
          Hi, I'm <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-3 whitespace-nowrap font-display text-[clamp(0.875rem,2.2vw,1.75rem)] font-medium text-slate-200"
        >
          {profile.role} · <Typed words={profile.typed} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl leading-relaxed text-slate-400 sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link to="/contact" className="btn-primary">Get in touch</Link>
          <Link to="/experience" className="btn-ghost">View experience</Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"
        >
          <li className="flex items-center gap-2"><FiMapPin className="text-brand-400" />{profile.location}</li>
          <li><a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-brand-400"><FiMail className="text-brand-400" />{profile.email}</a></li>
          <li><a href={profile.phoneHref} className="flex items-center gap-2 hover:text-brand-400"><FiPhone className="text-brand-400" />{profile.phone}</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-brand-400"><FiLinkedin className="text-brand-400" />LinkedIn</a></li>
        </motion.ul>
      </div>

      {/* Animated "test run" card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative mx-auto w-full max-w-md animate-float"
      >
        <div className="glass p-6 shadow-2xl shadow-brand-500/10">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 font-mono text-xs text-slate-500">test-run.suite</span>
          </div>
          <ul className="space-y-3">
            {checks.map((c, idx) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.35 }}
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm"
              >
                <span className="font-mono text-slate-300">{c}</span>
                <span className="flex items-center gap-1 text-brand-400">
                  <FiCheckCircle /> PASSED
                </span>
              </motion.li>
            ))}
          </ul>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.6 }}
              className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-500"
            />
          </div>
          <p className="mt-3 text-right font-mono text-xs text-slate-500">4 / 4 tests passed</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
