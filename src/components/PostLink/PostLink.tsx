// Ext
import { Link } from "gatsby";

// Int
import LinkStyle from "Constants/LinkStyle";
import Hit from "Constants/Hit";
import * as styles from "./PostLink.scss";

interface PostLinkProps {
  hit: Hit;
}

export default function PostLink({ hit }: PostLinkProps) {
  const {
    frontmatter: { path, title, date, description },
  } = hit;

  return (
    <Link to={path} style={LinkStyle}>
      <div className={styles.postContainer}>
        <div className={styles.postMeta}>{date}</div>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postDescription}>{description}</div>
      </div>
    </Link>
  );
}
