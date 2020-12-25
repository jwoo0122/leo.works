// Int
import styles from "./Layout.module.scss"

interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

export default function Layout({
  children,
  ...otherProps
}: LayoutProps) {
  return (
    <div className={styles.ancient}>
      <div className={styles.rootWithBackground}>
        <div className={styles.rootContainer}>
          <div {...otherProps}>{children}</div>
          <div className={styles.footerContainer}>© Leo jeong, 2020</div>
        </div>
      </div>
    </div>
  )
}
