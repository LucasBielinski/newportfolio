// exports external link
import ExternalLink from "../../components/Links/ExternalLink";
// imports style sheet
import { useState } from "react";
import "../../components/styles/projects.css";
// imports react-icons
import { FaGithubSquare } from "react-icons/fa";
// template for the project page, props pass here

const SkeletonLoad = () => (
  <div className="d-flex justify-content-center">
    <div className="grey img-fluid mt-3"></div>;
  </div>
);

export default function ProjectCard(props) {
  const [imageLoad, setImageLoad] = useState(false);

  const handleImage = () => {
    setImageLoad(true);
  };
  console.log(props);
  const { project } = props;
  console.log("extracted project");
  console.log(project);
  return (
    <div>
      <h4 className="mt-5">{project.name}</h4>
      {/* if image not loaded render component */}
      {!imageLoad && <SkeletonLoad />}
      <ExternalLink
        goTo={project.link}
        content={
          // if img is true load visible img and if img is false hide img
          // calls on load twice to ensure image is loaded regardless of visibility
          imageLoad ? (
            <img
              className="img-fluid mt-3"
              src={project.img}
              alt="project"
              onLoad={handleImage}
            />
          ) : (
            <img
              className="img-fluid mt-3"
              src={project.img}
              alt="project"
              style={{ visibility: "hidden" }}
              onLoad={handleImage}
            />
          )
        }
      />

      <div className=" icons text-center" id={project.id}>
        <div>
          <p>Role: {project.role}</p>
          <p>Technologies: {project.tech}</p>
          <p className="icons3">
            <ExternalLink
              goTo={project.git}
              content={
                <FaGithubSquare size={"50px"} style={{ margin: "0px 10px" }} />
              }
            />
            {/* <ExternalLink
              goTo={project.link}
              content={
                <FaArrowAltCircleUp
                  size={"50px"}
                  style={{ margin: "0px 10px" }}
                />
              }
            /> */}
          </p>
        </div>
      </div>
    </div>
  );
}
