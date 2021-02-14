import {
  ReactNode,
  useState,
  useCallback,
  useLayoutEffect,
  createContext,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import _  from 'lodash'

import styles from './Tooltip.scss'

interface TooltipProps {
  children?: ReactNode
}

const PORTAL_CONTAINER_ID = 'portal-container-id'

type TooltipContextValue = (target: ReactNode, tooltip: ReactNode, hideCallback) => void

export const TooltipContext = createContext<TooltipContextValue>(_.noop)

export default function Tooltip({
  children,
}: TooltipProps) {
  const [show, setShow] = useState(false)
  const [targetContent, setTargetContent] = useState('')
  const [tooltipContent, setTooltipContent] = useState('')
  const onHideCallbackRef = useRef<() => void | null>(_.noop)

  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null)
  
  const showTooltip = useCallback(async (targetContent, tooltipContent, hideCallback) => {
    setShow(true)
    setTargetContent(targetContent)
    setTooltipContent(tooltipContent)
    onHideCallbackRef.current = hideCallback
  }, [])
  
  const handleHide = useCallback(() => {
    if (_.isFunction(onHideCallbackRef.current)) {
      onHideCallbackRef.current()
    }
    onHideCallbackRef.current = _.noop
    setShow(false)
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
          >
            <div className={classNames(styles.content, {
              [styles.show]: show,
            })}>
              <div className={styles.targetContent}>
                <div className={styles.targetContentTitle}>
                  <div className={styles.label} />
                  <b>{ targetContent }</b>
                </div>
                <div
                  className={styles.closeButton}
                  onClick={handleHide}
                >
                  <div className={styles.closeChevron}/>
                </div>
              </div>
              <div className={styles.contentText}>
                { tooltipContent }
              </div>
            </div>
            <div
              className={classNames(styles.dim, {
                [styles.show]: show,
              })}
              onClick={handleHide}
            />
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
