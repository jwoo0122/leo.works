import { ReactNode } from "react";
import classNames from "classnames";

import useTooltip from "Hooks/useTooltip";
import * as styles from "./Highlight.scss";

interface HighLightProps {
  comment: ReactNode;
  children?: React.ReactNode;
}

export default function HighLight({ comment, children }: HighLightProps) {
  const { handleShowTooltip, isShowing } = useTooltip(children, comment);

  return (
    <span
      className={classNames(styles.wrapper, {
        [styles.isShowing]: isShowing,
      })}
      onClick={handleShowTooltip}
    >
      {children}
    </span>
  );
}
