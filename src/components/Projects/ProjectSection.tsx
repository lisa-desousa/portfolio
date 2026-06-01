import { projects } from "../../data/Projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

export default function ProjectSection() {
  const projectData = projects;

  return (
    <>
      <h2 className={styles.title}>Projekt</h2>
      <section className={styles.section}>
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </>
  );
}
