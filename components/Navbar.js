import Link from "next/link";
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/todos">Tarefas</Link>
      </li>
      <li>
        <Link href="/dinamicos">Tarefas Dinamicas</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
}
