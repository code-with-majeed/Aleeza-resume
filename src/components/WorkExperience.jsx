import React from "react";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "../data/cv";

const WorkExperience = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Work Experience" title="Where I've worked" />
    <div className="relative space-y-10 border-l border-white/10 pl-8 sm:pl-12">
      {experience.map((e) => (
        <Reveal key={e.company}>
          <div className="relative">
            <span className="absolute -left-[2.9rem] top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950 sm:-left-[3.9rem]">
              <FiBriefcase />
            </span>
            <div className="glass p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">{e.role}</h3>
                  <p className="mt-1 text-lg text-brand-400">{e.company}</p>
                </div>
                <span className="chip flex items-center gap-2"><FiCalendar /> {e.period}</span>
              </div>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-400"><FiMapPin /> {e.location}</p>
              <ul className="mt-5 space-y-3">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-slate-300">
                    <FiCheck className="mt-1 shrink-0 text-brand-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default WorkExperience;
