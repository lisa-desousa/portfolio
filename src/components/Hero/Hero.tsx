import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.upper}>front end</h1>
        <h1 className={styles.lower}>developer</h1>
      </div>
    </section>
  );
}
