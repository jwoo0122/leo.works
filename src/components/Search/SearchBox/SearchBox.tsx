// Ext
import React, { useCallback, ChangeEvent } from "react"
import { connectSearchBox } from "react-instantsearch-dom"

// Int
import styles from "./SearchBox.module.scss"

interface SearchBoxProps {
  currentRefinement: string
  refine: (value: string) => void
}

function SearchBox({ currentRefinement, refine }: SearchBoxProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      refine(event.currentTarget.value)
    },
    [refine],
  )

  return (
    <div className={styles.inputWrapper}>
      <input
        type="search"
        placeholder="Search (Beta)"
        value={currentRefinement}
        onChange={handleChange}
        className={styles.searchInput}
      />
    </div>
  )
}

export default connectSearchBox(SearchBox)
