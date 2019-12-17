import React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string
}

export default function Header({
  siteTitle,
}: HeaderProps) {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  )
}
