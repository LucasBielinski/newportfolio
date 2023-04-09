// exports external link
import ExternalLink from "../../components/Links/ExternalLink";
// imports style sheet
import "../../components/styles/projects.css";
// imports react-icons
import { FaGithubSquare, FaArrowAltCircleUp } from "react-icons/fa";
// template for the project page, props pass here
export default function ProjectCard(props) {
  console.log(props);
  const { project } = props;
  console.log("extracted project");
  console.log(project);
  return (
    <div key={project.id}>
      <h4 className="mt-5">{project.name}</h4>
      <img className="img-fluid mt-3" src={project.img} alt="project"></img>

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
