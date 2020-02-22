import React from 'react'

import LinkIcon from '../../../static/images/link.svg'
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
    <a href={href} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
      <div className={styles.linkContainer}>
        { children }
        { children?.length === 1 && (
          <LinkIcon className={styles.linkIcon} />
        ) }
      </div>
    </a>
  )
}
