import { ReactNode } from 'react'
import classNames from 'classnames'

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
  const { handleShowTooltip, isShowing } = useTooltip(children, comment)
  
  return (
    <span
      className={classNames(styles.wrapper, {
        [styles.isShowing]: isShowing,
      })}
      onClick={handleShowTooltip}
    >
      { children }
    </span>
  )
}
