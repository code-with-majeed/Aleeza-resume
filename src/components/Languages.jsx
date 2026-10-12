import React from "react";
import { FiGlobe } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { languages } from "../data/cv";

const Languages = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Languages" title="Communication" />
    <div className="flex flex-wrap gap-4">
      {languages.map((l, i) => (
        <Reveal key={l} delay={i * 0.1}>
          <div className="glass flex items-center gap-3 px-6 py-4 text-lg font-medium text-white">
            <FiGlobe className="text-brand-400" /> {l}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Languages;
