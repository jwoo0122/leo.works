import styles from './CodeBlock.module.scss'
interface CodeBlockProps {
  children: React.ReactNode
}

export default function CodeBlock({
  children,
}: CodeBlockProps) {
  return (
    <pre className={styles.codeWrapper}>
      { children }
    </pre>
  )
}
