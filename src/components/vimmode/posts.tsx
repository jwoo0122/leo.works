import { useState, useEffect } from "react";

interface Props {
  posts: any;
  keyStroke: { key: string };
  onPostSelected: (slug) => void;
}

export default function Posts({ posts, keyStroke, onPostSelected }: Props) {
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (keyStroke.key == 'j') {
      setSelected(prev => Math.min(prev + 1, posts.length - 1))
    } else if (keyStroke.key == 'k') {
      setSelected(prev => Math.max(prev - 1, 0))
    } else if (keyStroke.key == 'Enter') {
      onPostSelected(posts[selected].slug)
    }
  }, [keyStroke])

  return (
    <div>
      {posts.sort((p1, p2) => p1.data.pubDate < p2.data.pubDate).map((post, index) => (
        <div className={`w-lvw ${selected == index ? 'bg-white' : 'bg-black'} ${selected == index ? 'text-black' : 'text-white'}`}>
          {post.data.title}
        </div>
      ))}
    </div>
  )
}
