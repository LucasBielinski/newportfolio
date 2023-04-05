export default function Nav({ selection, handleSelectionChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            href="#About"
            onClick={() => handleSelectionChange("About")}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#Projects"
            onClick={() => handleSelectionChange("Projects")}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#Resume"
            onClick={() => handleSelectionChange("Resume")}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#Contact"
            onClick={() => handleSelectionChange("Contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
