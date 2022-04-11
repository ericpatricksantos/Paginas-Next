import Link from "next/link";

export async function getStaticProps(context){
  const {params} = context

  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.dinamicoId}`)

  const dinamico = await data.json()

  return {
    props: {dinamico}
  }
}

export async function getStaticPaths(){
  const response =  await fetch('https://jsonplaceholder.typicode.com/todos')

  const data = await response.json()

  const paths = data.map((d) => {
    return {
      params: {
        dinamicoId: `${d.id}` 
      },
    }
  })

  // fallback para false => faz com a geração das páginas seja no momento do build,
  // ou seja, se for criada uma pagina nova será necessário buildar o projeto novamente
  return { paths, fallback: false}
}

export default function Dinamico({dinamico}) {

  return (
    <>
      <Link href="/dinamicos">
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o todo: {dinamico.id}</h1>
      <h3>Texto: {dinamico.title}</h3>
      <p>
        Comentario la la la...{" "}
        <Link href={`/dinamicos/${dinamico.id}/comments/1`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentario le le le...{" "} 
        <Link href={`/dinamicos/${dinamico.id}/comments/2`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentario li li li...{" "}
        <Link href={`/dinamicos/${dinamico.id}/comments/3`}>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  );
}
