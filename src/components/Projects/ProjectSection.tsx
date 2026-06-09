import { projects } from "../../data/Projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

export default function ProjectSection() {
  const projectData = projects;

  return (
    <>
      <h2 className={styles.title}>Projekt</h2>

      <section className={styles.section}>
        {projectData.map((project, i) => (
          <div key={project.id} style={{ "--i": i } as React.CSSProperties}>
            <ProjectCard {...project} />
          </div>
        ))}
      </section>
    </>
  );
}
