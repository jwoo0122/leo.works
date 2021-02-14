import React, {
  ReactNode,
  useState,
  useCallback,
  useLayoutEffect,
  createContext,
} from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import _ from 'lodash'

import styles from './Tooltip.scss'

interface TooltipProps {
  children?: ReactNode
}

const PORTAL_CONTAINER_ID = 'portal-container-id'

export const TooltipContext = createContext<(target: ReactNode, tooltip: ReactNode) => void>(_.noop)

export default function Tooltip({
  children,
}: TooltipProps) {
  const [show, setShow] = useState(false)
  const [targetContent, setTargetContent] = useState('')
  const [tooltipContent, setTooltipContent] = useState('')

  const [portalContainer, setPortalContainer] = useState(document.getElementById(PORTAL_CONTAINER_ID))
  
  const showTooltip = useCallback((targetContent, tooltipContent) => {
    setShow(true)
    setTargetContent(targetContent)
    setTooltipContent(tooltipContent)
  }, [])
  
  const handleHide = useCallback(() => {
    setShow(false)
    setTargetContent('')
    setTooltipContent('')
  }, [])
  
  useLayoutEffect(() => {
    setPortalContainer(document.getElementById(PORTAL_CONTAINER_ID))
  }, [])
  
  return (
    <>
      {
        (portalContainer) ?
        createPortal(
          <div
            className={classNames(styles.wrapper, {
              [styles.show]: show,
            })}
            onClick={handleHide}
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
                { tooltipContent }
              </div>
            </div>
          </div>,
          portalContainer,
        ) : null
      }
      <div id={PORTAL_CONTAINER_ID}/>
      <TooltipContext.Provider value={showTooltip}>
        { children }
      </TooltipContext.Provider>
    </>
  )
}
