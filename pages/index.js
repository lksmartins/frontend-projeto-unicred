import Head from 'next/head'
import styles from '../styles/Home.module.css'

import cards from './cards.json'
import Card from '../components/Card'

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

          {
            cards.map((card)=>
              <Card key={card.ref} card={card}/>
            )
          }

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
