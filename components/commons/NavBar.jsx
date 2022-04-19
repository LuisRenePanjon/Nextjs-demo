
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const NavBar = () => {
    return (
        <nav className="flex items-center flex-wrap bg-teal-500 p-6">
            {menuItems.map((item) => (
            <ActiveLink text={item.text} href={item.href} key={item.text} />
            ))}
        </nav>
    )
}

