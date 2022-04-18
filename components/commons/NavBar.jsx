
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {
    return (
        <nav className="flex items-center flex-wrap bg-teal-500 p-6">
            <ActiveLink text={"Inicio"} href={'/'} />
            <ActiveLink text={"Acerca de"} href={'/about'} />
            <ActiveLink text={"Contacto"} href={'/contact'} />
        </nav>
    )
}

