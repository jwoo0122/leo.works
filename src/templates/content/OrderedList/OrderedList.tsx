import * as styles from "./OrderedList.scss";

interface OrderedList {
  children?: React.ReactNode;
}

export default function OrderedList({ children }: OrderedList) {
  return <ol className={styles.wrapper}>{children}</ol>;
}
