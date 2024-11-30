import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectDetails = [
  {
    id: 1,
    name: "BaazCart",
    description:
      "Bazaarcart is an e-commerce application that provides customers with a convenient and hassle-free shopping experience. At Bazaarcart, we offer a wide range of products including mobile devices, groceries, and clothes.",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "",
    github_link: "",
    img: "",
  },
  {
    id: 2,
    name: "Frazzo Clone",
    description:
      "Frazzo Clone is a replica e-commerce platform that provides an intuitive user experience for online shopping, featuring a wide range of products and seamless navigation.",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "",
    github_link: "",
    img: "",
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience in web development. Built with modern web technologies for a responsive and elegant design.",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "",
    github_link: "",
    img: "",
  },
  {
    id: 4,
    name: "KrishaAi",
    description:
      "KrishaAI is an AI-powered platform offering smart solutions for personal and professional needs, designed to enhance productivity and user engagement.",
    tech: "Javascript, ReactJs, Tailwind, Redux, ExpressJs, MongoDB, Nodejs",
    live_link: "",
    github_link: "",
    img: "",
  },
];

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string;
  live_link: string;
  github_link: string;
  img: string;
}

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectDetails.map((el: Project, index: number) => (
          <ProjectCard data={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
