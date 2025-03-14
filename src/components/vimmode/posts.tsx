import { useState, useEffect } from "react";
import type { KeyStroke, Post } from "./types";

interface Props {
  posts: Post[];
  keyStroke: KeyStroke | null;
  onPostSelected: (slug: string) => void;
}

export default function Posts({ posts, keyStroke, onPostSelected }: Props) {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (keyStroke?.key == 'j') {
      setSelected(prev => Math.min(prev + 1, posts.length - 1))
    } else if (keyStroke?.key == 'k') {
      setSelected(prev => Math.max(prev - 1, 0))
    } else if (keyStroke?.key == 'Enter') {
      onPostSelected(posts[selected].slug)
    }
  }, [keyStroke])

  return (
    <div className="w-full">
      {posts.sort((p1: Post, p2: Post) => p1.data.pubDate < p2.data.pubDate ? 1 : -1).map((post: Post, index: number) => (
        <div key={post.data.title} className={`${selected == index ? 'bg-neutral-700' : ''}`}>
          {post.data.title}
        </div>
      ))}
    </div>
  )
}
