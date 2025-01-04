import { useEffect, useState } from "react";
import type { KeyStroke, Post } from "./types";

interface Props {
  keyStroke: KeyStroke | null;
  post: Post | null;
  onCommandFire: (command: string) => number;
  onCommandExit: () => void;
}

export default function BottomLine({ post, keyStroke, onCommandFire, onCommandExit }: Props) {
  const [command, setCommand] = useState('')
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (keyStroke?.key == 'Backspace') {
      return
    }

    if (keyStroke?.key == 'Enter' || keyStroke?.key == 'Escape') {
      setCommand('');

      if (keyStroke?.key == 'Enter') {
        const result = onCommandFire(command);

        if (result < 0) {
          setErrorMessage(`Unknown command: ${command.replace(':', '')}`);
        }
      } else if (keyStroke?.key == 'Escape') {
        onCommandExit();
      }
    } else if (keyStroke != null) {
      setCommand(prev => prev + keyStroke.key)
    }
  }, [keyStroke, onCommandFire])

  useEffect(() => {
    const handler = setTimeout(() => {
      setErrorMessage('')
    }, 2000)

    return () => clearTimeout(handler);
  }, [errorMessage])

  return (
    <div className="absolute bottom-0 -ml-2 w-full bg-neutral-900 pt-2">
      <div className="flex justify-between pr-2">
        <div className="flex">
          <div className={`mr-2 h-full px-2 text-neutral-900 ${command.length > 0 ? 'bg-green-400' : 'bg-blue-400'}`}>
            {command.length > 0 ? 'COMMAND' : 'NORMAL'}
          </div>
          {post != null ? post.data.title : '/leo.works/posts'}
        </div>
        <div>
          {post != null ? 'utf-8' : 'All'}
        </div>
      </div>
      <div className="h-8 px-1">
        {errorMessage.length > 0 ? <span className="text-red-400">{errorMessage}</span> : command}
      </div>
    </div>
  )
}
