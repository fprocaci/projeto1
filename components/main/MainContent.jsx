import styles from "./MainContent.module.scss";
import NavBar from "../nav/NavBar";
import MainText from "../mainText/MainText";
export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <NavBar />
      <MainText />
    </div>
  );
}
