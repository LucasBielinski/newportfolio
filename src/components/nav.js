export default function Nav({ selection, handleSelectionChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#About"
            onClick={() => handleSelectionChange("About")}
          >
            Home
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#Projects"
            onClick={() => handleSelectionChange("Projects")}
          >
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#Resume"
            onClick={() => handleSelectionChange("Resume")}
          >
            Resume
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Contact">
            {" "}
            onClick{() => handleSelectionChange("Contact")}
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
