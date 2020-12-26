// Ext
import { memo } from "react"

// Int
import SEO from "Components/Seo"

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

export default memo(NotFoundPage)
