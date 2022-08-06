import Image from "next/image";
import styles from "./Logo.module.scss";
export default function Logo(props) {
  if (props.desktop) {
    return (
      <div className={styles.logo}>
        <Image src="/images/Logo.svg" alt="" width={162} height={58}></Image>
      </div>
    );
  } else if (props.mobile) {
    return (
      <div className={styles.logomobile}>
        <Image
          src="/images/Logo.svg"
          alt="Logo"
          width={185.28}
          height={66.34}
        ></Image>
      </div>
    );
  } else if (props.menu) {
    return (
      <div className={styles.logoMenuMobile}>
        <Image
          src="/images/Logo.svg"
          alt="Logo"
          width={162}
          height={58}
        ></Image>
      </div>
    );
  }
}
