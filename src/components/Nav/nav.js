import InternalLink from "./InternalLink";
import "../styles/nav.css";
// sets up the nav maps the links, on click it triggers handle selection change, which changes the link to the link clicked, props pass through here.
export default function Nav({ selection, handleSelectionChange }) {
  const links = ["About", "Projects", "Resume", "Contact"];
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between flex-column flex-md-row justify-content-between allign-items-center">
      <ul className="navbar-nav">
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
