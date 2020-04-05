import React from 'react'
import styles from './OrderedList.module.scss'

interface OrderedList {
  children: React.ReactNode
}

export default function OrderedList({
  children,
}: OrderedList) {
  return (
    <ol className={styles.wrapper}>
      { children }
    </ol>
  )
}
