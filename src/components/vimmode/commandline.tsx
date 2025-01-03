import { useState } from "react"

export default function Commandline() {
  const [command, setCommand] = useState('')

  return (
    <input autoFocus className="absolute bottom-0 bg-black text-white" value={command} onChange={e => setCommand(e.target.value)}/>
  )
}
