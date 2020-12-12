// Ext
import { useState, useEffect, useCallback } from 'react'
import { connectStateResults } from 'react-instantsearch-dom'
import _ from 'lodash'
import classNames from 'classnames'

// Int
import styles from './Loader.module.scss'

interface LoaderProps {
  isSearchStalled: boolean
  children: React.ReactNode
}

function Loader({
  isSearchStalled = false,
  children,
}: LoaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingChange = useCallback(_.throttle((searchState: boolean) => {
    setIsLoading(searchState)
  }, 500), [])

  useEffect(() => {
    handleLoadingChange(isSearchStalled)
  }, [isSearchStalled])

  return (
    <div className={styles.rootContainer}>
      {
        isLoading ? (
          <div className={styles.loaderContainer}>
            <div className={classNames(styles.loaderDiv, styles.one)} />
            <div className={classNames(styles.loaderDiv, styles.two)} />
            <div className={classNames(styles.loaderDiv, styles.three)} />
          </div>
        ) : (
          children
        )
      }
    </div>
  )
}

export default connectStateResults(Loader)
