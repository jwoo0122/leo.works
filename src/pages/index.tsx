// Int
import SEO from "Components/Seo"
import Search from "Components/Search"
import IndexTitle from 'Components/IndexTitle'
import withTwoPassRendering from "Hocs/withTwoPassRendering"

function IndexPage() {
  return (
    <>
      <SEO />
      <IndexTitle />
      <Search />
    </>
  )
}

export default withTwoPassRendering(IndexPage)
