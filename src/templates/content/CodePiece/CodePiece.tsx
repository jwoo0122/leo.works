// Ext
import { useMemo } from 'react'
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { nord, solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import _ from 'lodash'

// Int
import useDarkMode from 'Hooks/useDarkMode'

interface CodePieceProps {
  className?: string
  children: string
}

const codeTagProps: React.HTMLProps<HTMLElement> = {
  style: {
    fontFamily: 'inherit',
  }
}

const lineNumberContainerStyle = {
  float: 'left',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  width: 17,
  marginRight: 15,
}

const lineNumberStyle = {
  textAlign: 'right',
  color: 'rgba(150, 150, 150, 0.5)',
}

function languageDetector(className?: string): string | undefined {
  if (_.isNil(className)) return undefined
  return className?.split('-')[1]
}

function Pre({ children }: React.PropsWithChildren<HTMLSpanElement>) {
  return (
    <span>
      { children }
    </span>
  )
}

function CodePiece({
  className,
  children,
}: CodePieceProps) {
  const language = useMemo(() => languageDetector(className), [className])

  const isDarkMode = useDarkMode()

  const highlightTheme = useMemo(() => isDarkMode ? nord : solarizedlight, [isDarkMode])

  return (
    <SyntaxHighLighter
      PreTag={Pre}
      codeTagProps={codeTagProps}
      language={language}
      style={highlightTheme}
      lineNumberContainerStyle={lineNumberContainerStyle}
      lineNumberStyle={lineNumberStyle}
      showLineNumbers
    >
      { children.trim() }
    </SyntaxHighLighter>
  )
}

export default CodePiece
