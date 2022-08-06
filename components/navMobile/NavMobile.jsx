import Logo from "../logo/Logo";
import MenuMobile from "../menuMobile/MenuMobile";
import styles from "./NavMobile.module.scss";

export default function Navmobile() {
  return (
    <div className={styles.navmobile}>
      <Logo mobile />
      <MenuMobile />
    </div>
  );
}
