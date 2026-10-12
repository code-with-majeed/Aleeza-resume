import React from "react";
import PageHeader from "../components/PageHeader";
import AcademicProject from "../components/AcademicProject";
import CTA from "../components/CTA";

const Projects = () => (
  <>
    <PageHeader eyebrow="Project" title="Academic Project" subtitle="Full lifecycle ownership — from planning and testing to documentation." />
    <AcademicProject />
    <CTA />
  </>
);

export default Projects;
