// Int
import PostHead from '../PostHead'
import LeoTransition from './LeoTransition'
import styles from "./Layout.module.scss"

interface LayoutProps {
  data: {
    markdownRemark?: {
      frontmatter?: {
        title?: string
      }
    }
  }
  location: Location
  children: React.ReactNode
}

export default function Layout({
  data,
  location,
  children,
}: LayoutProps) {
  return (
    <div className={styles.ancient}>
      <div className={styles.rootWithBackground}>
        <PostHead postTitle={data?.markdownRemark?.frontmatter?.title}/>
        <div className={styles.rootContainer}>
          <LeoTransition location={location}>
            { children }
          </LeoTransition>
        </div>
        <div className={styles.footerContainer}>© Leo jeong, 2020</div>
      </div>
    </div>
  )
}
