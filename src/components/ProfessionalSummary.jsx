import React from "react";
import { FiTarget, FiSearch, FiLayers } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "../data/cv";

const highlights = [
  { icon: FiSearch, title: "Manual Testing", text: "Hands-on internship testing web applications." },
  { icon: FiLayers, title: "Agile Methodologies", text: "Collaborating with developers in Agile teams." },
  { icon: FiTarget, title: "Basic Automation", text: "Selenium and Python test scripts." },
];

const ProfessionalSummary = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Professional Summary" title="Quality-first mindset" />
    <div className="grid gap-8 lg:grid-cols-5">
      <Reveal className="lg:col-span-3">
        <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>
      </Reveal>
      <div className="grid gap-4 lg:col-span-2">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.1}>
            <div className="glass flex gap-4 p-5 transition hover:-translate-y-1 hover:border-brand-400/40">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
                <h.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">{h.title}</h3>
                <p className="text-sm text-slate-400">{h.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProfessionalSummary;
