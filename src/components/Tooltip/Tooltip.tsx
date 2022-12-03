import {
  ReactNode,
  useState,
  useCallback,
  useEffect,
  createContext,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import _ from "lodash";

import * as styles from "./Tooltip.scss";

interface TooltipProps {
  children?: ReactNode;
}

type TooltipContextValue = (
  target: ReactNode,
  tooltip: ReactNode,
  hideCallback
) => void;

export const TooltipContext = createContext<TooltipContextValue>(_.noop);

export default function Tooltip({ children }: TooltipProps) {
  const [show, setShow] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [targetContent, setTargetContent] = useState("");
  const [tooltipContent, setTooltipContent] = useState("");
  const onHideCallbackRef = useRef<() => void | null>(_.noop);

  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  const showTooltip = useCallback(
    async (targetContent, tooltipContent, hideCallback) => {
      setShouldRender(true);
      setTargetContent(targetContent);
      setTooltipContent(tooltipContent);
      onHideCallbackRef.current = hideCallback;
    },
    []
  );

  const handleHide = useCallback(() => {
    if (_.isFunction(onHideCallbackRef.current)) {
      onHideCallbackRef.current();
    }
    onHideCallbackRef.current = _.noop;
    setShow(false);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (!show) {
      setShouldRender(false);
    }
  }, [show]);

  const handlePortalContainerRef = useCallback((reference) => {
    setPortalContainer(reference);
  }, []);

  useEffect(
    function triggerRender() {
      if (shouldRender) {
        setShow(true);
      }
    },
    [shouldRender]
  );

  return (
    <>
      {portalContainer && (shouldRender || show)
        ? createPortal(
            <div
              className={classNames(styles.wrapper, {
                [styles.show]: show,
              })}
              onTransitionEnd={handleTransitionEnd}
            >
              <div
                className={classNames(styles.content, {
                  [styles.show]: show,
                })}
              >
                <div className={styles.targetContent}>
                  <div className={styles.targetContentTitle}>
                    <div className={styles.label} />
                    <b>{targetContent}</b>
                  </div>
                  <div className={styles.closeButton} onClick={handleHide}>
                    <div className={styles.closeChevron} />
                  </div>
                </div>
                <div className={styles.contentText}>{tooltipContent}</div>
              </div>
              <div
                className={classNames(styles.dim, {
                  [styles.show]: show,
                })}
                onClick={handleHide}
              />
            </div>,
            portalContainer
          )
        : null}
      <div ref={handlePortalContainerRef} />
      <TooltipContext.Provider value={showTooltip}>
        {children}
      </TooltipContext.Provider>
    </>
  );
}
