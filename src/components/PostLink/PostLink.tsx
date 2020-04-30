// Ext
import React from 'react'
import { Link } from 'gatsby'

// Int
import Hit from 'Constants/Hit'
import styles from './PostLink.module.scss'

interface PostLinkProps {
  hit: Hit
}

export default function PostLink({
  hit,
}: PostLinkProps) {
  const { frontmatter: { path, title, date } } = hit

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <div className={styles.postContainer}>
        <div className={styles.postMeta}>
          {date}
        </div>
        <div className={styles.postTitle}>
          {title}
        </div>
      </div>
    </Link>
  )
}
