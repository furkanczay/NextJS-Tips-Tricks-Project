import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/main/Footer'
import LoginPage from '@/app/(user)/auth/login/page'

const MainHeader = () => {
  
    return (
        <>
            <header className='mainHeader'>
                <Link href={'/'}><h1>Tips & Tricks</h1></Link>
                {/* <input type="search" autoComplete='off' placeholder='Kaldırılabilir - linke eklenebilir' /> */}
                <div className="navBar">
                    <Link href={'/'} className='navs'>Anasayfa</Link>
                    <Link href={'#'} className='navs'>Arama</Link>
                    <Link href={'#'} className='navs'>Hakkımızda</Link>
                    <Link href={'#'} className='navs'>İletişim</Link>
                </div>
                <div className="logSign">
                    <Link href={'/auth/login'} className='logIn'>Giriş Yap</Link>
                    <Link href={'#'} className='signUp'>Üye Ol</Link>
                </div>
            </header>
        </>
    )
}

export default MainHeader