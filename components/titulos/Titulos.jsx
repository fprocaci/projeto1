import styles from "./Titulos.module.scss";

export default function Titulos() {
  return (
    <div className={styles.titulos}>
      <div className={styles.titulo_principal}>
        <span>Hello There</span>
        <hr />
      </div>

      <h1>breathing pixels</h1>
    </div>
  );
}
