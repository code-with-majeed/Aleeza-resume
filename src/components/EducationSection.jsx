import React from "react";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "../data/cv";

const EducationSection = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Education" title="Academic background" />
    <Reveal>
      <div className="glass p-6 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/15 text-2xl text-brand-400">
              <FiBookOpen />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{education.degree}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm text-slate-400"><FiMapPin /> {education.institution}</p>
            </div>
          </div>
          <span className="chip flex items-center gap-2"><FiCalendar /> {education.period}</span>
        </div>

        <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-widest text-white">Relevant Coursework</h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {education.coursework.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 transition hover:border-brand-400/40 hover:text-white">
                {c}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

export default EducationSection;
