import React from 'react'

import GithubIcon from '../../images/github.svg'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <div className={styles.headerLine}>
      <a
        href='https://github.com/jwoo0122'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.githubIconWrapper}
      >
        <GithubIcon className={styles.githubIcon}/>
      </a>
    </div>
  )
}
