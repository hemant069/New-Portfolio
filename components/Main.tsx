"use client";
import React, { useEffect, useState } from "react";
import myimg from "../public/my_ai_img-removebg-preview (1).png";
import Image from "next/image";
import Skills from "./Skills";
import Projects from "./Projects";
import { Contact } from "./Contact";
import Social from "./Social";

const Main = () => {
  const skills = ["App Developer", "Software Engineer", "Full Stack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentSkill = skills[currentSkillIndex];

      // Typing logic
      if (!isDeleting && displayText.length < currentSkill.length) {
        setDisplayText(currentSkill.slice(0, displayText.length + 1));
      }

      // Deleting logic
      if (isDeleting && displayText.length > 0) {
        setDisplayText(currentSkill.slice(0, displayText.length - 1));
      }

      // Switch between typing and deleting
      if (!isDeleting && displayText === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentSkillIndex, isDeleting, skills]);

  return (
    <>
      <div className="sm:flex items-center gap-10 px-5 justify-between ">
        <div>
          <div>
            <div className="flex items-center gap-5">
              <p className="text-xl lg:text-6xl ">
                Hi! I Am A <span className="text-blue-500">{displayText}|</span>
              </p>
            </div>
            <p className=" text-base lg:text-6xl mt-5 mb-5">Hemant Prajapati</p>
          </div>
        </div>
        <div>
          <Image
            className="rounded-t-full lg:rounded-s-full shadow-inner "
            src={myimg}
            alt="my-img"
            width={500}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center mb-6"></h2>
        <div className="flex justify-center mt-20">
          <Skills />
        </div>
      </div>

      <div className="mt-20 sm:px-14">
        <Projects />
      </div>
      <div className="flex flex-col justify-center items-center mt-30">
        <Contact />
      </div>
      <div>
        <Social />
      </div>
    </>
  );
};

export default Main;
