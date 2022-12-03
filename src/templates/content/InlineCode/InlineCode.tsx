// Ext
import { ReactNode } from "react";

// Int
import * as styles from "./InlineCode.scss";

interface InlineCodeProps {
  children?: ReactNode;
}

function InlineCode({ children }: InlineCodeProps) {
  return <code className={styles.singleCodePiece}>{children}</code>;
}

export default InlineCode;
