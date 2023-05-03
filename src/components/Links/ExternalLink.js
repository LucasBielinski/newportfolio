// handles external link, is an external link templet, props pass through here
export default function ExternalLink(props) {
  // console.log(props);
  const { content, goTo } = props;
  return (
    <>
      <a href={goTo} target="_blank" rel="noreferrer">
        {content}
      </a>
    </>
  );
}
