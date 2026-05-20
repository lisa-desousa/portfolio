import { projects } from "../data/Projects";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const projectData = projects;

  return (
    <>
      {projectData.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
}
