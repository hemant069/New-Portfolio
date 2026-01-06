import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectDetails } from "@/data/projectData";
import { projectTypes } from "@/types/projectTypes";





const Projects = () => {
  return (
    <div className="container ">
      <h2 className="text-xl">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectDetails.map((el: projectTypes, index: number) => (
          <ProjectCard data={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
