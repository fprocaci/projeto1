import Logo from "../logo/Logo";
import NavBar from "../nav/NavBar";
import SocialIcons from "../socialIcons/SocialIcons";
import Titulos from "../titulos/Titulos";
import styles from "./MenuAside.module.scss";

export default function MenuAside() {
  return (
    <div className={styles.menuAside}>
      <Logo desktop />
      <Titulos />
      <SocialIcons socialIconsDesktop />
      <NavBar left />
    </div>
  );
}
