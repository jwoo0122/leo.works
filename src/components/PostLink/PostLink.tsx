import React from 'react'
import { Link } from 'gatsby'

import styles from './PostLink.module.scss'

export default function PostLink({ post }) {
  const { frontmatter: { path, title, date } } = post

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
