import Head from 'next/head';
import { NavBar } from '../commons/NavBar';
import styles from '../../styles/Home.module.css';
import { FC } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Home - Reneloper</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavBar />

            <main className={styles.main}>{children}</main>
        </div>
    );
};