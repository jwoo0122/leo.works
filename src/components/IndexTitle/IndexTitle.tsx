// Int
import { profileUrl } from "Constants/Gravatar";
import * as styles from "./IndexTitle.scss";

function IndexTitle() {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.titleBy}>
        <div className={styles.string}>BY</div>
        <div className={styles.string}>LEO</div>
        <div className={styles.string}>JEONG</div>
      </h1>
      <div className={styles.profileContainer}>
        <img className={styles.profileImage} src={profileUrl} />
      </div>
    </div>
  );
}

export default IndexTitle;
