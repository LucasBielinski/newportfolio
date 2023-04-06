import InternalLink from "./InternalLink";
export default function Nav({ selection, handleSelectionChange }) {
  const links = ["About", "Projects", "Resume", "Contact"];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
