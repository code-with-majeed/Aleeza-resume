import React from "react";
import PageHeader from "../components/PageHeader";
import EducationSection from "../components/EducationSection";
import Languages from "../components/Languages";
import CTA from "../components/CTA";

const Education = () => (
  <>
    <PageHeader eyebrow="Education" title="Academic Background" subtitle="A Software Engineering foundation at COMSATS University Islamabad." />
    <EducationSection />
    <Languages />
    <CTA />
  </>
);

export default Education;
