// Int
import * as styles from "./Heading2.scss";

interface Heading2Props {
  children?: React.ReactNode;
}

export default function Heading2({ children }: Heading2Props) {
  return (
    <a href={`#${children}`} className={styles.linkWrapper}>
      <h2 id={children?.toString()} className={styles.heading1}>
        {children}
      </h2>
    </a>
  );
}
