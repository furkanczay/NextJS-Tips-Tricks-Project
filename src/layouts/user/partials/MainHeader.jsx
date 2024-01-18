import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/main/Footer'

const MainHeader = () => {
  
    return (
        <>
            <header className='mainHeader'>
                <h1>Tips & Tricks</h1>
                {/* <input type="search" autoComplete='off' placeholder='Kaldırılabilir - linke eklenebilir' /> */}
                <div className="navBar">
                    <Link href={'#'} className='navs'>Anasayfa</Link>
                    <Link href={'#'} className='navs'>Arama</Link>
                    <Link href={'#'} className='navs'>Hakkımızda</Link>
                    <Link href={'#'} className='navs'>İletişim</Link>
                </div>
                <div className="logSign">
                    <Link href={'#'} className='logIn'>Giriş Yap</Link>
                    <Link href={'#'} className='signUp'>Üye Ol</Link>
                </div>
            </header>
        </>
    )
}

export default MainHeader