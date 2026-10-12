import React from "react";
import PageHeader from "../components/PageHeader";
import ProfessionalSummary from "../components/ProfessionalSummary";
import SoftSkills from "../components/SoftSkills";
import Languages from "../components/Languages";
import CTA from "../components/CTA";

const About = () => (
  <>
    <PageHeader eyebrow="About Me" title="Aleeza Qadeer" subtitle="QA / Software Tester based in Islamabad, Pakistan." />
    <ProfessionalSummary />
    <SoftSkills />
    <Languages />
    <CTA />
  </>
);

export default About;
