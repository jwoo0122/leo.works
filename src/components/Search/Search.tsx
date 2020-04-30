// Ext
import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'

// Int
import Hits from './Hits'
import SearchBox from './SearchBox'

const searchClient = algoliasearch(
  'G3BH0YU0M4',
  'f182e7893eb45ef0cdd006c5ec4229d7',
)

export default function Search() {
  return (
    <InstantSearch
      indexName="leo.works.posts"
      searchClient={searchClient}
    >
      <SearchBox />
      <Hits />
    </InstantSearch>
  )
}
