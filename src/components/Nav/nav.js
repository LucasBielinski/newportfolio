import InternalLink from "./InternalLink";
import "../styles/nav.css";
export default function Nav({ selection, handleSelectionChange }) {
  const links = ["About", "Projects", "Resume", "Contact"];
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between flex-column flex-md-row">
      <ul className="navbar-nav d-flex">
        {links.map((link) => (
          <InternalLink
            key={link}
            content={link}
            goTo={`#${link}`}
            doWhat={() => handleSelectionChange(link)}
          />
        ))}
      </ul>
    </nav>
  );
}
