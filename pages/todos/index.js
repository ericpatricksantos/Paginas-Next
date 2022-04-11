import styles from "../../styles/Todos.module.css"
import Head from 'next/head'
export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()

    return {
        props: {todos},
    }
}

export default function Todos({todos}) {
  return (
   <>
    <Head>
      <title>Tarefas</title>
    </Head>
    <h1>Tarefas:</h1>
    <ul className={styles.todolist}>
        {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
   </>
  )
}
