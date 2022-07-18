import { ReactNode } from 'react'

import Link from 'next/link'
import Head from 'next/head'

type LayoutProps = {
    children: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Default title' }: LayoutProps) => {

    return (<>
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <header className='bg-purple-400'>
                (Navbar)
                <nav className='flex'>
                    <Link href="/">
                        <a className='bg-yellow-400 p-2 m-2'>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className='bg-yellow-400 p-2 m-2'>About</a>
                    </Link>
                    <Link href='/posts'>
                        <a className='bg-yellow-400 p-2 m-2'>Posts</a>
                    </Link>
                </nav>
            </header>

            {children}
            
            <footer className='bg-blue-500'>
                <hr />
                <span>I`m here to stay (Footer)</span>
            </footer>
        </div>
    </>)
}

export default Layout