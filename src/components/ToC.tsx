import { type MarkdownHeading } from "astro";

interface ToCProps {
  headings: MarkdownHeading[];
}

export function ToC({ headings }: ToCProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between font-bold">
        Contents
      </div>
      <div>
        {headings.map((h) => (
          <a className="mt-1 block text-neutral-500 underline"
            style={{
              marginLeft: 24 * (h.depth - 1),
            }}
            href={`#${h.slug}`}
            onClick={e => e.stopPropagation()}
          >
            {h.text}
          </a>
        ))}
      </div>
    </div>
  );
}
