import React from 'react'
import { Link } from 'gatsby'

export default function PostLink({ post }) {
  const { frontmatter: { path, title, date }, html } = post

  return (
    <div>
      <Link to={path}>
        <div>
          {title}
        </div>
        <div>
          {date}
        </div>
        <div>
          {html}
        </div>
      </Link>
    </div>
  )
}