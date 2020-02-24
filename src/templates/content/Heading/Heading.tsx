// Ext
import React, { useState } from 'react'
import classnames from 'classnames'

// Int
import LinkIcon from 'static/images/link.svg'
import styles from './Heading.module.scss'

interface HeadingProps {
  children: Array<string>
}

export default function Heading({
  children,
}: HeadingProps) {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <a
      href={`#${children[0]}`}
      className={styles.linkWrapper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        id={children[0]}
        className={classnames(styles.heading1, {
          [styles.hover]: isHover,
        })}
      >
        { children }
      </div>

      <LinkIcon
        className={classnames(styles.linkIcon, {
          [styles.visible]: isHover,
        })}
      />
    </a>
  )
}
