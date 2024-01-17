import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'

const MainHeader = () => {
  
    return (
        <header className='mainHeader'>
            <h1>Tips & Tricks</h1>
            <Link href={'#'}>Giriş Yap</Link>
        </header>
    )
}

export default MainHeader