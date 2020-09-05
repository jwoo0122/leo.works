// Ext
import React from 'react'

// Int
import styles from './Heading.module.scss'

interface HeadingProps {
  children: Array<string>
}

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <a
      href={`#${children[0]}`}
      className={styles.linkWrapper}
    >
      <div
        id={children[0]}
        className={styles.heading1}
      >
        { children }
      </div>
    </a>
  )
}
