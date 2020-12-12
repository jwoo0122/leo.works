import styles from './SuperScript.module.scss'

interface SuperScriptProps {
  id: string
  children: HTMLElement
}

export default function SuperScript({
  id,
  children,
}: SuperScriptProps) {
  return (
    <sup
      id={id}
      className={styles.supWrapper}
    >
      { children }
    </sup>
  )
}
