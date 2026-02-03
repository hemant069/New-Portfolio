"use client";
import Projects from "./Projects";
import { Contact } from "./Contact";
import Hero from "./Hero";
import WorkExperience from "./WorkExperience";
import Github from "./Github";
import VisitorCounter from "./VisitorCount";


const Main = () => {

  // <script defer src="https://cloud.umami.is/script.js" data-website-id="b6242faa-29d0-49f4-9a44-73c9ec94be8e"></script>
  return (
    <div>

      <Hero />
      <WorkExperience />
      <Projects />
      <Github />
      <VisitorCounter />
      <Contact />

    </div>
  );
};

export default Main;
