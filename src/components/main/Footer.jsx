import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function Footer() {

    const [isInputVisible, setInputVisible] = useState(false);

    const handleSearchClick = (e) => {
        e.preventDefault();
        setInputVisible(!isInputVisible);
  };
    
    return (
        <>
            <footer className="footerMenu">
                <div className="footerTop">
                    <div className="ttLogo">
                        <Link href={'/'}><h1>Tips & Tricks</h1></Link>
                    </div>
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
                    <div className="footerSocialMedia">
                        <Link href={'#'} className='socials'><Image width={16} height={16} src="/images/fb-logo.svg" alt="Facebook Logo" /></Link>
                        <Link href={'#'} className='socials'><Image width={16} height={16} src="/images/google-logo.svg" alt="Google Logo" /></Link>
                        <Link href={'#'} className='socials'><Image width={16} height={16} src="/images/apple-logo.svg" alt="Apple Logo" /></Link>
                        <Link href={'#'} className='socials'><Image width={16} height={16} src="/images/instagram-logo.svg" alt="Instagram Logo" /></Link>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="policy">
                        <Link href={'#'} className='policyLink'>Gizlilik Politikası</Link>
                        <Link href={'#'} className='policyLink'>Şartlar ve Koşullar</Link>
                    </div>
                    <form className="subscribe">
                        <input type="email" placeholder='Mail adresi giriniz' />
                        <button>Abone Ol</button>
                    </form>
                </div>
            </footer>
        </>
    )
}