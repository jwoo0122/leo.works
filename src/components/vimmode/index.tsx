import Commandline from "./commandline";

interface Props {
  posts: any;
}

export default function VimMode({ posts }: Props) {
  return (
    <div className="font-mono relative h-lvh w-lvw bg-black text-white">
      {posts.sort((p1, p2) => p1.data.pubDate < p2.data.pubDate).map(post => (
        <div>
          {post.data.title}
        </div>
      ))}

      <Commandline />
    </div>
  )
}
