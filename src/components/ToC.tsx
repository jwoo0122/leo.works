import type { MarkdownHeading } from "astro";

interface ToCProps {
  headings: MarkdownHeading[];
}

export function ToC({ headings }: ToCProps) {
  return (
    <>
      <div
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 12,
          marginTop: 12,
        }}
      >
        Contents
      </div>
      <div
        style={{
          fontSize: 14,
        }}
      >
        {headings.map((h) => (
          <div
            style={{
              marginLeft: 24 * (h.depth - 1),
              marginBottom: 8,
            }}
          >
            <a href={`#${h.slug}`} style={{ color: "rgba(0, 0, 0, 0.5)" }}>
              {h.text}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
