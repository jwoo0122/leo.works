// Ext
import React, { useMemo } from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'

// Int
import useDarkMode from 'Hooks/useDarkMode'
import { LightAccent, DarkAccent } from 'Constants/Theme'

interface TransitionLinkProps extends React.HTMLProps<HTMLElement> {
  to: string
  direction: 'up' | 'down'
}

export default function TransitionLink({
  to,
  direction,
  children,
  ...otherProps
}: TransitionLinkProps) {
  const isDarkMode = useDarkMode()

  const AccentColor = useMemo(() => (isDarkMode ? DarkAccent : LightAccent), [isDarkMode])

  return (
    <Link
      to={to}
      direction={direction}
      duration={0.6}
      cover
      bg={AccentColor}
      {...otherProps}
    >
      { children }
    </Link>
  )
}
