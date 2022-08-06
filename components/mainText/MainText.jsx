import styles from "./MainText.module.scss";
import Titulos from "../titulos/Titulos";

export default function MainText(props) {
  if (props.desktop) {
    return (
      <div className={styles.main_text}>
        <hr />
        <p>
          Ham followed now ecstatic use speaking exercise may repeated. Himself
          he evident oh greatly my on inhabit general concern.
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.main_text}>
        <hr />
        <p>
          Ham followed now ecstatic use speaking exercise may repeated. Himself
          he evident oh greatly my on inhabit general concern.
        </p>
        <Titulos />
      </div>
    );
  }
}
