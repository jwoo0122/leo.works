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

    switch(command) {
      case ':e .':
        setCurrentPost(null);
        break;
      case ':q':
        location.href = '/'
    }
  }

  return (
    <div ref={vimRef} tabIndex={1} onKeyDown={e => handleKeyStroke(e.key)} className="relative h-lvh w-lvw select-none overflow-hidden bg-black font-mono text-white">
      {currentPost == null ?
        <Posts posts={posts} keyStroke={lastKeyStroke} onPostSelected={handleSelectPost} /> :
        <div>
          {currentPost?.body}
        </div>
      }

      <BottomLine post={currentPost} keyStroke={lastCommandKeyStroke} onCommandFire={handleFireCommand}/>
    </div>
  )
}
