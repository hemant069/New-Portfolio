"use client";
import Projects from "./Projects";
import { Contact } from "./Contact";
import Hero from "./Hero";
import WorkExperience from "./WorkExperience";
import Github from "./Github";
import Booking from "./cal/Booking";


const Main = () => {


  return (
    <div>

      <Hero />
      <WorkExperience />
      <Projects />
      <Github />
      <Booking />
      <Contact />

    </div>
  );
};

export default Main;
