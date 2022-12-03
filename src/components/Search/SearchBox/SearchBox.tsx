// Ext
import { useCallback, ChangeEvent } from "react";
import { connectSearchBox } from "react-instantsearch-dom";

// Int
import * as styles from "./SearchBox.scss";

interface SearchBoxProps {
  currentRefinement: string;
  refine: (value: string) => void;
}

function SearchBox({ currentRefinement, refine }: SearchBoxProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      refine(event.currentTarget.value);
    },
    [refine]
  );

  return (
    <div className={styles.inputWrapper}>
      <input
        type="search"
        placeholder="Search title"
        value={currentRefinement}
        onChange={handleChange}
        className={styles.searchInput}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />
    </div>
  );
}

export default connectSearchBox(SearchBox);
