import React from "react";
import { FiFolder, FiCalendar, FiMapPin, FiCheck } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { project } from "../data/cv";

const AcademicProject = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Academic Project" title={project.type} />
    <Reveal>
      <div className="glass relative overflow-hidden p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-2xl text-white">
                <FiFolder />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-400"><FiMapPin /> {project.institution}</p>
              </div>
            </div>
            <span className="chip flex items-center gap-2"><FiCalendar /> {project.period}</span>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {project.points.map((p) => (
              <li key={p} className="rounded-xl bg-white/5 p-5 text-slate-300 transition hover:bg-white/10">
                <FiCheck className="mb-3 text-xl text-brand-400" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  </section>
);

export default AcademicProject;
