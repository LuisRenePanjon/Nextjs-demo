import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import styles from '../../styles/Home.module.css';

export default function ContactPage() {
    return (
        <MainLayout>
            <h1 className={'text-3xl font-bold underline text-red-600'}>
                Contact
            </h1>
            <h1 className={styles.title}>
                Ir a <Link href={'/'}>index!</Link>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/contact.jsx</code>
            </p>
        </MainLayout>
    );
}
