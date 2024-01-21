import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/main/Footer'
import LoginPage from '@/app/(user)/auth/login/page'

const MainHeader = () => {

    const [isInputVisible, setInputVisible] = useState(false);

    const handleSearchClick = (e) => {
        e.preventDefault();
        setInputVisible(!isInputVisible);
  };
  
    return (
        <>
            <header className='mainHeader'>
                <Link href={'/'}><h1>Tips & Tricks</h1></Link>
                <div className='searchInput' style={{ display: isInputVisible ? 'flex' : 'none' }}>
                    <input type="search" autoComplete='off' placeholder='Aranacak kelime giriniz' />
                    <button onClick={handleSearchClick}>X</button>
                </div>
                <div className="navBar" style={{ display: isInputVisible ? 'none' : 'flex' }}>
                    <Link href={'/'} className='navs'>Anasayfa</Link>
                    <Link href={'#'} className='navs' onClick={handleSearchClick}>Arama</Link>
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