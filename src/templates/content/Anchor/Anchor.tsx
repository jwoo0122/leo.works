// Int
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
    <a
      style={{ textDecoration: 'none' }}
      className={styles.linkContainer}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      { children }
    </a>
  )
}
