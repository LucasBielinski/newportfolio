export default function InternalLink(props) {
  console.log(props);
  const { content, goTo, doWhat } = props;
  return (
    <>
      <li className="nav-item" onClick={doWhat}>
        <a className="nav-link" href={goTo}>
          {content}
        </a>
      </li>
    </>
  );
}
