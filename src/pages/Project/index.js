import { projectData } from "./data";
import ProjectCard from "./projectCard";
export default function Projects() {
  return (
    <div className="text-center">
      <h2>Projects</h2>
      <p>
        The following are projects I have either built myself or contributed to.
      </p>
      {projectData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
