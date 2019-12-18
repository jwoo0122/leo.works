import React from 'react'
import styles from './Quote.module.scss'

export default function Quote({ children }) {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteBlock}/>
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  )
}