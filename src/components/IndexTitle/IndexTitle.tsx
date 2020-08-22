// Ext
import React, { useCallback, useState } from 'react'
import classNames from 'classnames'

// Int
import { profileUrl } from 'Constants/Gravatar'
import styles from './IndexTitle.module.scss'

function IndexTitle() {
  const [hasError, setHasError] = useState(false)

  const handleError = useCallback(() => {
    setHasError(true)
  }, [])

  return (
    <div className={styles.titleContainer}>
      <div className={classNames(styles.profileContainer, {
        [styles.error]: hasError
      })}>
        <img
          className={styles.profileImage}
          src={profileUrl}
          onError={handleError}
        />
      </div>
      <div className={styles.titleBy}>
        <div className={styles.string}>
          BY LEO JEONG
        </div>
      </div>
    </div>
  )
}

export default IndexTitle
