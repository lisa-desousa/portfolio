import styles from "../styles/components/About.module.css";
import type { About } from "../types/AboutType";

export default function About(props: About) {
  return (
    <section className={styles.section}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </section>
  );
}
