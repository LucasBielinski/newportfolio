import ExternalLink from "../../components/Links/ExternalLink";
import "../../components/styles/projects.css";
import { FaGithubSquare, FaArrowAltCircleUp } from "react-icons/fa";
export default function ProjectCard(props) {
  console.log(props);
  const { project } = props;
  console.log("extracted project");
  console.log(project);
  return (
    <div key={project.id}>
      {/* <a
        className="image"
        data-toggle="collapse"
        href={`#${project.id}`}
        aria-expanded="false"
        aria-controls={project.id}
      > */}
      <h4>{project.name}</h4>
      <img className="mt-4" src={project.img} alt="project"></img>
      {/* </a> */}
      <div className=" icons text-center" id={project.id}>
        <div>
          <p>
            <ExternalLink
              goTo={project.git}
              content={<FaGithubSquare size={"50px"} />}
            />
            <ExternalLink
              goTo={project.link}
              content={<FaArrowAltCircleUp size={"50px"} />}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
