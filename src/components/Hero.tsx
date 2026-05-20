import styles from "../styles/components/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.title}>
      <h1>front end</h1>
      <h1 className={styles.lower}>developer</h1>
    </section>
  );
}
