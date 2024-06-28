import type { MarkdownHeading } from "astro";
import { useState } from "react";

interface ToCProps {
  headings: MarkdownHeading[];
}

const downchevron = `-translate-y-0.5 rotate-45`
const upchevron = `translate-y-0.5 -rotate-[135deg]`

export function ToC({ headings }: ToCProps) {
  if (headings.length == 0) {
    return null;
  }

  const [isOpened, toggle] = useState(false)

  return (
    <div className="my-3 cursor-pointer rounded-md bg-slate-200 px-4 py-2 dark:bg-slate-800" onClick={() => toggle(prev => !prev)}>
      <div className="flex items-center justify-between font-bold">
        Contents
        <div className={`ml-2 size-2 ${isOpened ? upchevron : downchevron} border-b-2 border-r-2 border-slate-500`}></div>
      </div>
      {isOpened && (
        <div className="mt-4">
          {headings.map((h) => (
            <a className="mt-1 block underline"
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
      )}
    </div>
  );
}
