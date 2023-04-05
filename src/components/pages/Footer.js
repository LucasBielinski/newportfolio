import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center">
      <p>
        <a href="https://github.com/LucasBielinski">
          <FaGithubSquare size={"50px"} />
        </a>

        <a href="https://www.linkedin.com/in/lucas-bielinski-224a00141/">
          <FaLinkedin size={"50px"} />
        </a>
      </p>
    </footer>
  );
}
