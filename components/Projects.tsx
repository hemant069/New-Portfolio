import ProjectCard from "./ProjectCard";
import { ProjectDetails } from "@/data/projectData";
import { projectTypes } from "@/types/projectTypes";





const Projects = () => {
  return (
    <div className="container ">
      <p className="text-start text-gray-500 mt-2">Featured</p>
      <h2 className="text-xl">My Projects</h2>

      <div className="w-full grid grid-cols-3 m-auto gap-8 mt-2">
        {ProjectDetails.map((el: projectTypes, index: number) => (
          <ProjectCard data={el} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
