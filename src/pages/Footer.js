import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "../components/Links/ExternalLink";
import "../components/styles/footer.css";
export default function Footer() {
  return (
    <footer className="text-center mt-5">
      <p className="icons2">
        <Link
          goTo={"https://github.com/LucasBielinski"}
          content={<FaGithubSquare size={"50px"} />}
        />
        <Link
          goTo={"https://www.linkedin.com/in/lucas-bielinski-224a00141/"}
          content={<FaLinkedin size={"50px"} />}
        />
      </p>
    </footer>
  );
}
