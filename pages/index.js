import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
   <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="Roupas, Calçados"></meta>
    </Head>
    <div >
      <h1 className={styles.title}>Bem Vindo HHHHHH</h1>
      <Image src="/images/city.jpg" width="220px" height="300px" alt="Cidade"/>
    </div>
   </>
  )
}
