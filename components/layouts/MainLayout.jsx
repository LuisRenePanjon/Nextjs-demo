import Head from 'next/head'
import { NavBar } from '../commons/NavBar'
import styles from '../../styles/Home.module.css'

export const MainLayout = ({ children }) => {
    return (
        <div>

            <Head>
                <title>Home - Reneloper</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
