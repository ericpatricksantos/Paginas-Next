import styles from "../../styles/Todos.module.css"
import Head from 'next/head'
import Link from "next/link"

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const dinamicos = await data.json()

    return {
        props: {dinamicos},
    }
}

export default function Dinamicos({dinamicos}) {
  return (
   <>
    <Head>
      <title>Tarefas</title>
    </Head>
    <h1>Tarefas:</h1>
    <ul className={styles.todolist}>
        {dinamicos.map((dinamico) => (
            <li key={dinamico.id}>{dinamico.title} - <Link  href={`/dinamicos/${dinamico.id}`}><a>Ver mais</a></Link></li>
        ))}
    </ul>
   </>
  )
}
