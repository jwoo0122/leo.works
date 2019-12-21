import React from 'react'

import LinkIcon from '../../../images/link.svg'
import styles from './Anchor.module.scss'

interface AnchorProps {
  href: string
  children: React.ReactNode
}

export default function Anchor({
  href,
  children,
}: AnchorProps) {
  return (
    <a href={href} style={{ textDecoration: 'none' }}>
      <div className={styles.linkContainer}>
        { children }
        <LinkIcon className={styles.linkIcon} />
      </div>
    </a>
  )
}