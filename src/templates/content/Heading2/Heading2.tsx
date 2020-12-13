// Int
import styles from './Heading2.module.scss'

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
      <h2
        id={children[0]}
        className={styles.heading1}
      >
        { children }
      </h2>
    </a>
  )
}
