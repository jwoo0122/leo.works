// Ext
import { useEffect, useState, useCallback } from 'react'

const darkModeQuery = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)")

function useDarkMode() {
  if (!darkModeQuery) { return }

  const [isDarkMode, setIsDarkMode] = useState(darkModeQuery.matches)

  const handleChangeDarkMode = useCallback((e: MediaQueryListEvent) => {
    setIsDarkMode(e.matches)
  }, [])

  useEffect(() => {
    darkModeQuery.addEventListener('change', handleChangeDarkMode)

    return function cleanUp() {
      darkModeQuery.removeEventListener('change', handleChangeDarkMode)
    }
  }, [])

  return isDarkMode
}

export default useDarkMode
