import Logo from "../logo/Logo";
import SocialIcons from "../socialIcons/SocialIcons";
import styles from "./BotaoMobile.module.scss";
import Link from "next/link";
import { useState } from "react";

export default function BotaoMobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.botaomobile}>
      <div className={styles.navlist} onClick={() => setOpen(!open)}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>

      <ul
        className={styles.menumobile}
        onClick={() => setOpen(false)}
        style={{ right: open ? "0px" : "-75vw" }}
      >
        <li className={styles.headerMenuMobile}>
          <div className={styles.navlist} onClick={() => setOpen(!open)}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
          </div>
          <Logo menu />
        </li>
        <ul className={styles.menuLinks}>
          <li className={styles.menuItem}>
            <Link href="/">
              <a>latest work</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">
              <a>blog</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">
              <a>schedule call</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">
              <a>my clients</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">
              <a>pricing</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">
              <a>my process</a>
            </Link>
          </li>
        </ul>
        <div className={styles.socialIcons}>
          <SocialIcons />
        </div>
      </ul>
    </div>
  );
}
