import styles from "./SocialIcons.module.scss";
import Link from "next/link";

export default function SocialIcons(props) {
  if (props.socialIconsDesktop) {
    return (
      <div className={styles.socialIcons}>
        <div className={styles.socialIcons_links}>
          <Link href="/">
            <a>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-behance"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-vimeo-v"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.socialIconsMobile}>
        <div className={styles.socialIconsLinksMobile}>
          <Link href="/">
            <a>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-behance"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-vimeo-v"></i>
            </a>
          </Link>
          <Link href="/">
            <a>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
