import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { technicalSkills } from "../data/cv";

const TechnicalSkills = () => (
  <section className="container-x py-16">
    <SectionHeading eyebrow="Technical Skills" title="Tools I work with" />
    <div className="grid gap-6 md:grid-cols-3">
      {technicalSkills.map((g, gi) => (
        <Reveal key={g.group} delay={gi * 0.1}>
          <div className="glass h-full p-7">
            <h3 className="mb-6 font-display text-lg font-semibold text-white">{g.group}</h3>
            <div className="space-y-5">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-200">{s.name}</span>
                    <span className="text-brand-400">{s.level}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default TechnicalSkills;
