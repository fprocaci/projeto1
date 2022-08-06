import Image from "next/image";
import styles from "./SideL.module.scss";

export default function SideL() {
  return (
    <div className={styles.sideL}>
      <div className={styles.text}>
        <span>
          eat <hr />
        </span>
        <span>breath.</span>
        <span>design.</span>
      </div>
      <div className={styles.image}>
        <Image src="/images/young.png" width={409} height={495} />
      </div>
    </div>
  );
}
