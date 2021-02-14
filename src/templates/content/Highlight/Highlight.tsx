import { ReactNode } from 'react'

import useTooltip from 'Hooks/useTooltip'
import styles from './Highlight.scss'

interface HighLightProps {
  comment: ReactNode
  children: string
}

export default function HighLight({
  comment,
  children,
}: HighLightProps) {
  const handleShowTooltip = useTooltip(children, comment)
  
  return (
    <span
      className={styles.wrapper}
      onClick={handleShowTooltip}
    >
      { children }
    </span>
  )
}
