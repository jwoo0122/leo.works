import { useEffect, useRef, useState } from "react";
import Posts from "./posts";

interface Props {
  posts: any;
}

export default function VimMode({ posts }: Props) {
  const [lastKeyStroke, setLastKeyStroke] = useState({ key: '' })
  const vimRef = useRef<HTMLDivElement | null>(null)

  const [currentPost, setCurrentPost] = useState(null)

  useEffect(() => {
    vimRef.current?.focus()
  }, [])

  const handleSelectPost = (slug: string) => {
    setCurrentPost(posts.find(post => post.slug == slug));
  }

  return (
    <div ref={vimRef} tabIndex={1} className="select-none" onKeyDown={e => setLastKeyStroke({ key: e.key })} className="relative h-lvh w-lvw overflow-hidden bg-black font-mono text-white">
      {currentPost == null ?
        <Posts posts={posts} keyStroke={lastKeyStroke} onPostSelected={handleSelectPost} /> :
        <div>
          {currentPost?.body}
        </div>
      }
    </div>
  )
}
