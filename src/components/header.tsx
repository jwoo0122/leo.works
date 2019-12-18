import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 600,
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
          Leo Jeong
        </Link>
      </h1>
    </div>
  )
}
