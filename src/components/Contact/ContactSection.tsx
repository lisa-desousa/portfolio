import type { ContactInfo } from "../../types/ContactInfoType";
import styles from "./Contact.module.css";

export default function ContactInfo(props: ContactInfo) {
  return (
    <section className={styles.section}>
      <h2>Contact</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <a href={props.linkedin}>LinkedIn</a>
      <a href={props.github}>GitHub</a>
    </section>
  );
}
