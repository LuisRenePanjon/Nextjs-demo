import Link from "next/link"
import { useRouter } from "next/router"


export const ActiveLink = ({ text, href }) => {
    const { asPath } = useRouter();

    return (
        <Link href={href}>
            <a className={`mx-3 ${ asPath === href && 'text-indigo-500 '}`} >{text}</a>
        </Link>
    )
}
