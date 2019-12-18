import React from 'react'
import styles from './Anchor.scss'

export default function Anchor({
  href,
  children,
}) {
  return (
    <a href={href} style={{ textDecoration: 'none' }}>
      <div className={styles.linkContainer}>
        { children }
      </div>
    </a>
  )
}