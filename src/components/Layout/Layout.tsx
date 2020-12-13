import Header from "Components/Header"
import styles from "./Layout.module.scss"

interface LayoutProps extends React.HTMLProps<HTMLDivElement> {
  hideHeaderLine?: boolean
  children: React.ReactNode
}

export default function Layout({
  hideHeaderLine = false,
  children,
  ...otherProps
}: LayoutProps) {
  return (
    <div className={styles.ancient}>
      { !hideHeaderLine && (
        <Header />
      ) }
      <div className={styles.rootWithBackground}>
        <div className={styles.rootContainer}>
          <div {...otherProps}>{children}</div>
          <div className={styles.footerContainer}>© Leo jeong, 2020</div>
        </div>
      </div>
    </div>
  )
}
