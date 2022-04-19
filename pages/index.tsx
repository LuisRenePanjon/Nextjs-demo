import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'


export default function Home() {
  return (
    <MainLayout>
      <h1 className={"text-3xl font-bold underline text-red-600"}>
        Home
      </h1>

      <h1 className={styles.title}>
        Ir a <Link href="/about">Acerca de mí!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
