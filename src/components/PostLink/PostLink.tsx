// Ext
import React from 'react'

// Int
import TransitionLink from 'Components/TransitionLink'
import LinkStyle from 'Constants/LinkStyle'
import Hit from 'Constants/Hit'
import styles from './PostLink.module.scss'

interface PostLinkProps {
  hit: Hit
}

export default function PostLink({ hit }: PostLinkProps) {
  const {
    frontmatter: { path, title, date },
  } = hit

  return (
    <TransitionLink
      direction="down"
      to={path}
      style={LinkStyle}
    >
      <div className={styles.postContainer}>
        <div className={styles.postMeta}>{date}</div>
        <div className={styles.postTitle}>{title}</div>
      </div>
    </TransitionLink>
  )
}
