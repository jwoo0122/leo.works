import { ReactNode, useMemo } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import _ from 'lodash'

import styles from './Tooltip.scss'

interface TooltipProps {
  targetContent?: ReactNode
  content: ReactNode
  show?: boolean
  onHide: () => void
}

export default function Tooltip({
  targetContent = null,
  content,
  show = false,
  onHide = _.noop,
}: TooltipProps) {
  const portalContainer = useMemo(() => document.getElementById('portal-container'), [])
  
  return (portalContainer) ?
    createPortal(
      <div
        className={classNames(styles.wrapper, {
          [styles.show]: show,
        })}
        onClick={onHide}
      >
        <div className={classNames(styles.dim, {
          [styles.show]: show,
        })}/>
        <div className={classNames(styles.content, {
          [styles.show]: show,
        })}>
          <div className={styles.targetContent}>
            &quot;{ targetContent }&quot;의 주석
          </div>
          <div className={styles.contentText}>
            { content }
          </div>
        </div>
      </div>,
      portalContainer,
    ) : null
}
