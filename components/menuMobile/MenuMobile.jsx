import styles from "./MenuMobile.module.scss";
import Link from "next/link";
import BotaoMobile from "../botaoMobile/BotaoMobile";

export default function MenuMobile() {
  return (
    <div className={styles.geral}>
      <BotaoMobile />
    </div>
  );
}
