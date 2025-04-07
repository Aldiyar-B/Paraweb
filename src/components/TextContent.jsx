export default function TextContent({ html }) {
  return (
    <div className="text-content" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
