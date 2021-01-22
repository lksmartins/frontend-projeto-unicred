import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Unicred</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Projeto <a href="https://nextjs.org">Unicred</a>
        </h1>

        <p className={styles.description}>
          Alguma descrição exemplo
        </p>

        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>Título Exemplo</h3>
            <img src="/imgs/barbanegra.webp"/>
            <p>Descrição exemplo.</p>
            <input type="text" placeholder="Insira a senha" />
          </div>

        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo/full_black.svg" alt="Chave-Mestra Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
