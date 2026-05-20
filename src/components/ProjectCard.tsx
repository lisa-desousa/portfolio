import type { Project } from "../types/ProjectType";

export default function ProjectCard(props: Project) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>

      {/* map här! ibland vill man ha länk till deploy + repo */}
      <a href={props.link.url}>{props.link.text}</a>
      <img src={props.image} alt="Project image"></img>
    </div>
  );
}
