import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ProfessionalSummary from "../components/ProfessionalSummary";
import CoreCompetencies from "../components/CoreCompetencies";
import CTA from "../components/CTA";

const Home = () => (
  <>
    <Hero />
    <Stats />
    <ProfessionalSummary />
    <CoreCompetencies />
    <CTA />
  </>
);

export default Home;
