// Ext
import React, { createRef, useLayoutEffect } from "react"
import _ from 'lodash'

// Int
import useDarkMode from 'Hooks/useDarkMode'

const src = "https://utteranc.es/client.js"

export interface UtterancesProps {
  repo: string
}

const Utterances: React.FC<UtterancesProps> = React.memo(({ repo }) => {
  const containerRef = createRef<HTMLDivElement>()
  const isDarkMode = useDarkMode()

  useLayoutEffect(() => {
    if (_.isNil(containerRef.current)) { return }

    containerRef.current.innerHTML = ''
    const utterances = document.createElement("script")

    const attributes = {
      src,
      repo,
      "issue-term": "pathname",
      label: "comment",
      theme: isDarkMode ? "github-dark" : "github-light",
      crossOrigin: "anonymous",
      async: "true",
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    containerRef.current?.appendChild(utterances)
  }, [repo, isDarkMode])

  return <div ref={containerRef} />
})

Utterances.displayName = "Utterances"

export default Utterances
