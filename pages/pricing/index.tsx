import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"
import styles from '../../styles/Home.module.css'

export default function PricingPage() {
    return (
        <MainLayout>
            <h1 className={styles.title}>
                Ir a  <Link href={'/'} >index!</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/pricing.jsx</code>
            </p>
        </MainLayout>
    )
}


