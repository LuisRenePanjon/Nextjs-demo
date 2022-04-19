import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
    text: string;
    href: string;
    children?: JSX.Element | JSX.Element[];
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a className={`mx-3 ${asPath === href && 'text-indigo-500 '}`}>
                {text}
            </a>
        </Link>
    );
};
