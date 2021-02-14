// Int
import Tooltip from 'Components/Tooltip'
import PostHead from '../PostHead'
import LeoTransition from './LeoTransition'
import styles from "./Layout.scss"

interface LayoutProps {
  data: {
    mdx?: {
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
        <Tooltip>
          <PostHead postTitle={data?.mdx?.frontmatter?.title}/>
          <div className={styles.rootContainer}>
            <LeoTransition location={location}>
              { children }
            </LeoTransition>
          </div>
          <div className={styles.footerContainer}>© Leo jeong, 2020</div>
        </Tooltip>
      </div>
    </div>
  )
}
