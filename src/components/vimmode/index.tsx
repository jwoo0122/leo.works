import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Posts from "./posts";
import BottomLine from "./bottomline";
import type { KeyStroke, Post } from "./types";
import PostView from "./postview";

interface Props {
  posts: Post[];
}

export default function VimMode({ posts }: Props) {
  const [lastKeyStroke, setLastKeyStroke] = useState<KeyStroke | null>(null)
  const [lastCommandKeyStroke, setLastCommandKeyStroke] = useState<KeyStroke | null>(null)

  const vimRef = useRef<HTMLDivElement | null>(null)

  const [currentPost, setCurrentPost] = useState<Post | null>(null)

  useEffect(() => {
    vimRef.current?.focus()
  }, [])

  const handleSelectPost = (slug: string) => {
    setCurrentPost(posts.find((post: Post) => post.slug == slug) ?? null);
  }

  const handleKeyStroke = (event: KeyboardEvent) => {
    if (lastCommandKeyStroke != null || event.key == ":") {
      setLastCommandKeyStroke({ key: event.key, ctrlKey: event.ctrlKey })
    } else {
      setLastKeyStroke({ key: event.key, ctrlKey: event.ctrlKey })
    }
  }

  const handleFireCommand = (command: string) => {
    setLastCommandKeyStroke(null)

    switch (command) {
      case ':e .':
      case ':edit .':
        setCurrentPost(null);
        return 0;
      case ':q':
      case ':quit':
        location.href = '/'
        return 0;
      default:
        return -1
    }
  }

  return (
    <div ref={vimRef} tabIndex={1} onKeyDown={e => handleKeyStroke(e)} className="flex h-lvh w-lvw items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-stone-300 to-stone-500 p-8">
        <div className="rounded-lg bg-neutral-500 p-2">
          <div
            style={{
              background: "linear-gradient(to top, #000, #111, #222, #111, #000)",
              backgroundSize: '100% 4px',
              backgroundRepeat: 'repeat-y',
            }}
            className="relative h-[412px] w-[640px] select-none overflow-hidden rounded-lg bg-neutral-900 p-2 font-mono text-white"
          >
            {currentPost == null ?
              <Posts posts={posts} keyStroke={lastKeyStroke} onPostSelected={handleSelectPost} /> :
              <PostView post={currentPost} keyStroke={lastKeyStroke} />
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
