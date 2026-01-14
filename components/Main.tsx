"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Skills from "./Skills";
import Projects from "./Projects";
import { Contact } from "./Contact";
import Social from "./Social";
import Header from "./Header";
import Hero from "./Hero";
import WorkExperience from "./WorkExperience";
import Test from "./Test";

const Main = () => {


  return (
    <>

      <div>
        <Hero />
      </div>
      <div>
        <WorkExperience />
      </div>
      <div >
        <Projects />
      </div>

      <div

        className=""
      >
        <Contact />
      </div>
      <div>

      </div>
      {/* <div>
        <h2 className="text-2xl font-bold text-center mb-6"></h2>
        <div className="flex justify-center mt-20">
          <Skills />
        </div>
      </div>

      <div ref={inputRef} className="mt-20 sm:px-14">
        <Projects />
      </div>
     
      <div className="flex justify-center mt-5">
        <Social />
      </div> */}
    </>
  );
};

export default Main;
