import { useCallback, useState, ReactNode } from 'react'

import Tooltip from 'Components/Tooltip'
import styles from './Highlight.scss'

interface HighLightProps {
  comment: ReactNode
  children: string
}

export default function HighLight({
  comment,
  children,
}: HighLightProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  
  const handleShowTooltip = useCallback(() => setShowTooltip(true), [])
  const handleHideTooltip = useCallback(() => setShowTooltip(false), [])
  
  return (
    <>
      <Tooltip
        targetContent={children}
        content={comment}
        show={showTooltip}
        onHide={handleHideTooltip}
      />
      <span
        className={styles.wrapper}
        onClick={handleShowTooltip}
      >
        { children }
      </span>
    </>
  )
}
