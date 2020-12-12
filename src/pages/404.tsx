import { memo } from "react"

import Layout from "Components/Layout"
import SEO from "Components/Seo"

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default memo(NotFoundPage)
