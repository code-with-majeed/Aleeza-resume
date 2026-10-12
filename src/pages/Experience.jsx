import React from "react";
import PageHeader from "../components/PageHeader";
import WorkExperience from "../components/WorkExperience";
import CTA from "../components/CTA";

const Experience = () => (
  <>
    <PageHeader eyebrow="Experience" title="Work Experience" subtitle="Hands-on QA experience in an Agile development team." />
    <WorkExperience />
    <CTA />
  </>
);

export default Experience;
