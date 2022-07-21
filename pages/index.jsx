import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Index.module.css'
import Conteudo from '../components/conteudo/Conteudo'


export default function Home() {
  return (
    <>
      <Head>
        <title>Page Portfólio</title>

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      </Head>
      <div className={styles.container}>
        <Conteudo />
        
      </div>
    </>

  )
}
