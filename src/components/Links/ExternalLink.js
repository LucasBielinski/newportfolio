export default function ExternalLink(props) {
  console.log(props);
  const { content, goTo } = props;
  return (
    <>
      <a href={goTo} target="_blank" rel="noreferrer">
        {content}
      </a>
    </>
  );
}
