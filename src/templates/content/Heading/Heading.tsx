// Int
import styles from "./Heading.scss";

interface HeadingProps {
  children?: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return (
    <a href={`#${children}`} className={styles.linkWrapper}>
      <h1 id={children?.toString()} className={styles.heading1}>
        {children}
      </h1>
    </a>
  );
}
