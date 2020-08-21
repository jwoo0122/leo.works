// Ext
import React, { useEffect, useCallback, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import _ from 'lodash'

// Int
import LinkStyle from 'Constants/LinkStyle'
import styles from './PostHead.module.scss'

interface PostHeadProps {
  postTitle: string
}

function PostHead({ postTitle }: PostHeadProps) {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(_.throttle(() => {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop >= 100) { setScrolled(true) }
    else { setScrolled(false) }
  }, 200), [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)

    return function cleanUp() {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <div
      className={classNames(styles.headWrapper, {
        [styles.show]: scrolled,
      })}
    >
      <div className={styles.headContents}>
        <Link to={'/'} style={LinkStyle}>
          <div className={styles.blogName}>
            <div className={styles.blogNameWrapper} />
            <div className={styles.blogNameText}>
              B L J
            </div>
            <div className={styles.blogNameWrapper} />
          </div>
        </Link>

        <div className={styles.postTitle}>
          <span className={styles.titleText}>
            { postTitle }
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostHead
