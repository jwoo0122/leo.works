import type { KeyStroke, Post } from "./types";
import { useEffect, useRef } from 'react';

interface Props {
  post: Post;
  keyStroke: KeyStroke | null;
}

export default function PostView({ post, keyStroke }: Props) {
  const postViewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (keyStroke?.ctrlKey) {
      switch (keyStroke.key) {
        case 'd':
          postViewRef.current?.scrollBy({ top: 168 })
          break;
        case 'u':
          postViewRef.current?.scrollBy({ top: -168 })
          break;
      }
    }
  }, [keyStroke])

  const postString = post.body;

  return (
    <div className="h-[340px] overflow-hidden whitespace-pre-line pb-36" ref={postViewRef}>
      {postString}
    </div>
  )
}
