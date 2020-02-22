import React from 'react'
import styles from './Paragraph.module.scss'

interface ParagraphProps {
  children: React.ReactNode
}
export default function Paragraph({
  children,
}: ParagraphProps) {
  return (
    <p className={styles.pwrapper}>
      { children }
    </p>
  )
}