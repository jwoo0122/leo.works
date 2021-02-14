// Int
import styles from './Heading2.scss'

interface HeadingProps {
  children: string
}

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <a
      href={`#${children}`}
      className={styles.linkWrapper}
    >
      <h2
        id={children}
        className={styles.heading1}
      >
        { children }
      </h2>
    </a>
  )
}
