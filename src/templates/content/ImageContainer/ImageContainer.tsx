import React from 'react'

import styles from './ImageContainer.module.scss'

interface ImageContainerProps {
  src: string
}

export default function ImageContainer({
  src,
}: ImageContainerProps) {
  return (
    <div>
      <img 
        className={styles.imageWrapper}
        src={src}
      />
    </div>
  )
}