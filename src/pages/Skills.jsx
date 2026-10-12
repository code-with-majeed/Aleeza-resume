import React from "react";
import PageHeader from "../components/PageHeader";
import CoreCompetencies from "../components/CoreCompetencies";
import TechnicalSkills from "../components/TechnicalSkills";
import SoftSkills from "../components/SoftSkills";
import CTA from "../components/CTA";

const Skills = () => (
  <>
    <PageHeader eyebrow="Skills" title="Competencies & Tools" subtitle="Testing expertise, process knowledge, technical tools and the soft skills behind them." />
    <CoreCompetencies />
    <TechnicalSkills />
    <SoftSkills />
    <CTA />
  </>
);

export default Skills;
