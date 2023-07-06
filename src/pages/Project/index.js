// imports project data
import { projectData } from "./data";
// imports project card
import ProjectCard from "./projectCard";
//sends project data to project card
export default function Projects() {
  return (
    <div className="projects text-center">
      <h2 className="mt-4">Projects</h2>
      <p className="mt-4">
        The following are projects I have either built myself or contributed to.
      </p>
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
