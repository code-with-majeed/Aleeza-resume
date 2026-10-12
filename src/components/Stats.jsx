import React from "react";
import Reveal from "./Reveal";

const stats = [
  { v: "4", l: "Months QA Internship" },
  { v: "4+", l: "Years of Software Engineering Study" },
  { v: "3", l: "Testing & API Tools" },
  { v: "2", l: "Languages Spoken" },
];

const Stats = () => (
  <section className="container-x py-10">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.l} delay={i * 0.08}>
          <div className="glass p-6 text-center">
            <div className="gradient-text font-display text-4xl font-bold">{s.v}</div>
            <div className="mt-2 text-xs uppercase tracking-wider text-slate-400">{s.l}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Stats;
