import type { Project } from "../../types/ProjectType";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props: Project) {
  return (
    <div className={styles.card}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      {/* map här? man kanske vill ha länk till deploy + repo */}
      <div className={styles.link}>
        <a href={props.link.url}>{props.link.text}</a>
      </div>
      {/* object-fill här */}
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={props.image}
          alt="Project image"
          width={300}
          height={300}
        ></img>
      </div>
    </div>
  );
}
