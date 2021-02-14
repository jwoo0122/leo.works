// Ext
import { useCallback } from "react"
import { connectHits } from "react-instantsearch-dom"

// Int
import Loader from 'Components/Search/Loader'
import PostLink from "Components/PostLink"
import Hit from "Constants/Hit"
import styles from './Hits.scss'

interface HitsProps {
  hits: Hit[]
}

function Hits({ hits }: HitsProps) {
  const renderResult = useCallback(() => {
    if (hits.length > 0) {
      return hits
        .sort((h1, h2) => {
          if (h1.frontmatter.date < h2.frontmatter.date) return 1;
          if (h1.frontmatter.date === h2.frontmatter.date) return 0;
          else return -1
        })
        .map((hit) => <PostLink key={hit.objectID} hit={hit} />);
    }

    return (
      <span className={styles.noHitsText}>
        No Post
      </span>
    );
  }, [hits])

  return (
    <Loader>
      { renderResult() }
    </Loader>
  );
}

export default connectHits(Hits);
