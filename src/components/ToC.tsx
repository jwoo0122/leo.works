import type { MarkdownHeading } from "astro";

interface ToCProps {
  headings: MarkdownHeading[];
}

export function ToC(props?: ToCProps) {
  if (props == null || props.headings.length == 0) {
    return null;
  }

  return (
    <>
      <div
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 8,
          marginTop: 32,
        }}
      >
        Contents
      </div>
      <div
        style={{
          fontSize: 14,
        }}
      >
        {props.headings.map((h) => (
          <div
            style={{
              marginLeft: 24 * (h.depth - 1),
              marginBottom: 8,
            }}
          >
            <a
              href={`#${h.slug}`}
              style={{ color: "rgba(120, 120, 120, 0.8)" }}
            >
              {h.text}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
