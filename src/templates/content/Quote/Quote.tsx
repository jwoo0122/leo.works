import styles from './Quote.scss'

interface QuoteProps {
  children: React.ReactNode
}

export default function Quote({
  children,
}: QuoteProps) {
  return (
    <div className={styles.quoteContainer}>
      <div className={styles.quoteBlock}/>
      <div className={styles.contents}>
        {children}
      </div>
    </div>
  )
}
