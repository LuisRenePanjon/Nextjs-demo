import Link from 'next/link'


export const NavBar = () => {
    return (
        // <nav>
        //     <Link href={'/'} >  Home</Link>
        //     <Link href={'about'}>About</Link>
        // </nav>
        
        <nav className="flex items-center flex-wrap bg-teal-500 p-6">
                <Link href={'/'} > 
                    <a className="mx-3">Home</a> 
                </Link>
                <Link href={'about'}>
                    <a className="mx-3 active:text-blue-700">About</a>
                </Link>
        </nav>


    )
}

