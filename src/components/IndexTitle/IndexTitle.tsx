// Int
import { profileUrl } from 'Constants/Gravatar'
import styles from './IndexTitle.module.scss'

function IndexTitle() {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.titleBy}>
        <div className={styles.string}>
          BY
        </div>
        <div className={styles.string}>
          LEO
        </div>
        <div className={styles.string}>
          JEONG
        </div>
      </div>
      <div className={styles.profileContainer}>
        <img
          className={styles.profileImage}
          src={profileUrl}
        />
      </div>
    </div>
  )
}

export default IndexTitle
