// Ext
import { useMemo } from 'react'
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group'

// Int
import styles from './LeoTransition.module.scss'

const rootPathname = '/'

interface LeoTransitionProps {
  location: Location
  children: React.ReactNode
}

function LeoTransition({
  location: { pathname },
  children,
}: LeoTransitionProps) {
  const transitionClassNames = useMemo(() => {
    if (pathname === rootPathname) {
      return {
        enter: styles.indexEnter,
        enterActive: styles.indexEnterActive,
        enterDone: styles.indexEnterDone,
        exit: styles.indexExit,
        exitActive: styles.indexExitActive,
        exitDone: styles.indexExitDone,
      }
    }
    
    return {
      enter: styles.postEnter,
      enterActive: styles.postEnterActive,
      enterDone: styles.postEnterDone,
      exit: styles.postExit,
      exitActive: styles.postExitActive,
      exitDone: styles.postExitDone,
    }
  }, [pathname])
  
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={pathname}
        timeout={500}
        classNames={transitionClassNames}
      >
        <div style={{ width: '100%' }}>
          { children }
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default LeoTransition
