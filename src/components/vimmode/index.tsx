import { useEffect, useRef, useState } from "react";
import Posts from "./posts";
import BottomLine from "./bottomline";
import type { Post } from "./types";

interface Props {
  posts: Post[];
}

export default function VimMode({ posts }: Props) {
  const [lastKeyStroke, setLastKeyStroke] = useState<{ key: string } | null>(null)
  const [lastCommandKeyStroke, setLastCommandKeyStroke] = useState<{ key: string } | null>(null)

  const vimRef = useRef<HTMLDivElement | null>(null)

  const [currentPost, setCurrentPost] = useState<Post | null>(null)

  useEffect(() => {
    vimRef.current?.focus()
  }, [])

  const handleSelectPost = (slug: string) => {
    setCurrentPost(posts.find((post: Post) => post.slug == slug) ?? null);
  }

  const handleKeyStroke = (key: string) => {
    if (lastCommandKeyStroke != null || key == ":") {
      setLastCommandKeyStroke({ key })
    } else {
      setLastKeyStroke({ key })
    }
  }

  const handleFireCommand = (command: string) => {
    setLastCommandKeyStroke(null)

    switch (command) {
      case ':e .':
        setCurrentPost(null);
        return 0;
      case ':q':
        location.href = '/'
        return 0;
      default:
        return -1
    }
  }

  return (
    <div ref={vimRef} tabIndex={1} onKeyDown={e => handleKeyStroke(e.key)} className="flex h-lvh w-lvw items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-400 p-8">
        <div className="rounded-lg bg-neutral-500 p-2">
          <div className="relative h-[420px] w-[640px] select-none overflow-hidden rounded-lg bg-neutral-900 p-2 font-mono text-white">
            {currentPost == null ?
              <Posts posts={posts} keyStroke={lastKeyStroke} onPostSelected={handleSelectPost} /> :
              <div>
                {currentPost?.body}
              </div>
            }

            <BottomLine post={currentPost} keyStroke={lastCommandKeyStroke} onCommandFire={handleFireCommand} onCommandExit={() => setLastCommandKeyStroke(null)} />
          </div>
        </div>
        <div className="mt-6 font-title text-3xl text-neutral-600">
          leo.works
        </div>
      </div>
    </div>
  )
}
