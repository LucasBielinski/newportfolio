// imports react-icons
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
// imports external link
import Link from "../components/Links/ExternalLink";
// imports style sheet
import "../components/styles/footer.css";
export default function Footer() {
  return (
    // renders footer
    <footer className="text-center mt-5">
      {/* links will send props to Extrenal link template */}
      <p className="icons2">
        <Link
          goTo={"https://github.com/LucasBielinski"}
          content={
            <FaGithubSquare size={"50px"} style={{ margin: "0px 10px" }} />
          }
        />
        <Link
          goTo={"https://www.linkedin.com/in/lucas-bielinski-224a00141/"}
          content={<FaLinkedin size={"50px"} style={{ margin: "0px 10px" }} />}
        />
      </p>
    </footer>
  );
}
