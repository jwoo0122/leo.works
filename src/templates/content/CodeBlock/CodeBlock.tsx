// Ext
import { useMemo } from 'react'
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter'
import { nord, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import _ from 'lodash'

// Intck'
import useDarkMode from 'Hooks/useDarkMode'
import styles from './CodeBlock.module.scss'

function PreTag({ children }: React.PropsWithChildren<HTMLPreElement>) {
  return (
    <pre className={styles.codeWrapper}>
      { children }
    </pre>
  )
}

interface CodeBlockProps {
  className?: string
  children: string
}

const codeTagProps: React.HTMLProps<HTMLElement> = {
  style: {
    fontFamily: 'inherit',
  }
}

function languageDetector(className?: string): string | undefined {
  if (_.isNil(className)) return undefined
  return className?.split('-')[1]
}

function CodeBlock({
  className,
  children,
}: CodeBlockProps) {
  const language = useMemo(() => languageDetector(className), [className])

  const isDarkMode = useDarkMode()

  const highlightTheme = useMemo(() => isDarkMode ? nord : solarizedlight, [isDarkMode])

  return (
    <SyntaxHighLighter
      PreTag={PreTag}
      codeTagProps={codeTagProps}
      language={language}
      style={highlightTheme}
    >
      { children.trim() }
    </SyntaxHighLighter>
  )
}

export default CodeBlock
