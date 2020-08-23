// Ext
import React from 'react'

// Int
import styles from './Heading2.module.scss'

interface HeadingProps {
  children: Array<string>
}

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <div className={styles.heading1}>
      { children }
    </div>
  )
}
