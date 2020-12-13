// Int
import styles from './Heading.module.scss'

interface HeadingProps {
  children: Array<string>
}

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <a
      href={`#${children[0]}`}
      className={styles.linkWrapper}
    >
      <h1
        id={children[0]}
        className={styles.heading1}
      >
        { children }
      </h1>
    </a>
  )
}
