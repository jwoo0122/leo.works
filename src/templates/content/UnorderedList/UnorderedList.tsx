import styles from './UnorderedList.module.scss'

interface OrderedList {
  children: React.ReactNode
}

export default function OrderedList({
  children,
}: OrderedList) {
  return (
    <ul className={styles.wrapper}>
      { children }
    </ul>
  )
}
