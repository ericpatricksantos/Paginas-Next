import Link from "next/link";
import { useRouter } from "next/router";

export default function Comments() {
  const router = useRouter();

  const dinamicoId = router.query.dinamicoId;
  const commentId = router.query.commentId;

  return (
    <>
      <Link href={`/dinamicos/${dinamicoId}`}>
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o comentario numero: {commentId}</h1>
      <p>Do Todo: {dinamicoId}</p>
    </>
  );
}
