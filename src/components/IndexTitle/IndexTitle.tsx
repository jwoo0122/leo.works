// Int
import { profileUrl } from 'Constants/Gravatar'
import styles from './IndexTitle.module.scss'

function IndexTitle() {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.profileContainer}>
        <img
          className={styles.profileImage}
          src={profileUrl}
        />
      </div>
      <div className={styles.titleBy}>
        <div className={styles.centerStrike}/>
        <div className={styles.string}>
          BY LEO JEONG
        </div>
      </div>
    </div>
  )
}

export default IndexTitle
