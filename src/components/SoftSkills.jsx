import React from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { softSkills } from "../data/cv";

const SoftSkills = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Soft Skills" title="How I work" center />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {softSkills.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08}>
          <div className="glass group h-full p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent-400/40">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-accent-500/15 text-xl text-accent-400 transition group-hover:rotate-6 group-hover:scale-110">
              <Icon name={s.icon} />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default SoftSkills;
