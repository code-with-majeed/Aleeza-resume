import React from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { competencies } from "../data/cv";

const CoreCompetencies = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Core Competencies" title="What I bring to a QA team" center />
    <div className="grid gap-6 md:grid-cols-3">
      {competencies.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.12}>
          <div className="glass group h-full p-7 transition duration-300 hover:-translate-y-2 hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-500/10">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/30 to-accent-500/30 text-brand-400 transition group-hover:scale-110">
              <Icon name={c.icon} className="text-2xl" />
            </div>
            <h3 className="mb-4 font-display text-xl font-semibold text-white">{c.title}</h3>
            <div className="flex flex-wrap gap-2">
              {c.items.map((it) => (
                <span key={it} className="chip">{it}</span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default CoreCompetencies;
