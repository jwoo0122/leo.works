import { useEffect, useState } from "react";

interface Props {
  keyStroke: { key: string } | null;
  onCommandFire: (command: string) => void;
  post: any;
}

export default function BottomLine({ post, keyStroke, onCommandFire }: Props) {
  const [command, setCommand] = useState('')

  useEffect(() => {
    if (keyStroke?.key == 'Enter') {
      onCommandFire(command);
      setCommand('');
    } else if (keyStroke != null) {
      setCommand(prev => prev + keyStroke.key)
    }
  }, [keyStroke, onCommandFire])

  return (
    <div className="absolute bottom-0 w-lvw bg-black pt-2">
      <div className="flex justify-between bg-white text-black">
        <div>
          {post != null ? post.data.title : '/leo.works/posts'}
        </div>
        <div>
          {post != null ? 'utf-8' : 'All'}
        </div>
      </div>
      <div className="h-8">
        {command}
      </div>
    </div>
  )
}
