import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'

import styles from '../../styles/Home.module.css'
export default function AboutPage() {
    return (
        <>
            <h1 className={styles.title}>
                Ir a  <Link href={'/'} >index!</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/about.jsx</code>
            </p>
        </>
    )
}



AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}



