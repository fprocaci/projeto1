import Head from "next/head";
import MainContent from "../../components/main/MainContent";
import MenuAside from "../../components/menuAside/menuAside";
import Navmobile from "../../components/navMobile/NavMobile";
import SideL from "../../components/sideL/SideL";
import SideR from "../../components/sideR/SideR";
import styles from "../../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mathelda</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <Navmobile />
      <MenuAside />
      <MainContent />
      <SideL />
      <SideR />
    </div>
  );
}
