// Ext
import { useEffect, useCallback, useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'

// Int
import LinkStyle from 'Constants/LinkStyle'
import styles from './PostHead.module.scss'

const SCROLL_THRESHOLD = 200

interface PostHeadProps {
  postTitle?: string
}

function PostHead({ postTitle }: PostHeadProps) {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    window.requestAnimationFrame(() => {
      if (document.documentElement.scrollTop >= SCROLL_THRESHOLD) { setScrolled(true) }
      else { setScrolled(false) }
    })
  }, [])

  useEffect(() => {
    if (document.documentElement.scrollTop >= SCROLL_THRESHOLD) {
      setScrolled(true)
    }
    document.addEventListener('scroll', handleScroll)

    return function cleanUp() {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={classNames(styles.headWrapper, {
        [styles.show]: scrolled && !!postTitle,
      })}
    >
      <div className={styles.headContents}>
        <Link
          to={'/'}
          style={LinkStyle}
        >
          <div className={styles.blogName}>
            <div className={styles.blogNameText}>
              Leo Jeong
            </div>
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
