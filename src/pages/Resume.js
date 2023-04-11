// import resume
import PDF from "../images/resumes.pdf";
// styles imported
import "../components/styles/Resume.css";
// renders resume page
export default function Resume() {
  return (
    <div className="text-center">
      <h2>Resume</h2>
      {/* lets pdf to be downloaded */}
      <p>
        To see my full resume {""}
        <a className="resumelink" href={PDF} download>
          click here
        </a>
      </p>
      <h3>Skills</h3>
      <div>
        <h4>Front-End</h4>

        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Materilize</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Fetch API</li>
          <li>Handelbars.js</li>
        </ul>
        <h4>Backend</h4>
        <ul>
          <li>Node.js</li>
          <li>Rest API</li>
          <li>GraphQL</li>
          <li>MongoDB</li>
          <li>MySql</li>
          <li>Express</li>
        </ul>
      </div>
    </div>
  );
}
