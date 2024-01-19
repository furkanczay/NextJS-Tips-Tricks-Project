import Link from 'next/link'

export default function Footer() {
    
    return (
        <>
            <footer className="footerMenu">
                <div className="footerTop">
                    <div className="ttLogo">
                        <h1>Tips & Tricks</h1>
                    </div>
                    <div className="navBar">
                        <Link href={'#'} className='navs'>Anasayfa</Link>
                        <Link href={'#'} className='navs'>Arama</Link>
                        <Link href={'#'} className='navs'>Hakkımızda</Link>
                        <Link href={'#'} className='navs'>İletişim</Link>
                    </div>
                    <div className="footerSocialMedia">
                        <Link href={'#'} className='socials'><img src="/images/fb-logo.svg" alt="Facebook Logo" /></Link>
                        <Link href={'#'} className='socials'><img src="/images/google-logo.svg" alt="Google Logo" /></Link>
                        <Link href={'#'} className='socials'><img src="/images/apple-logo.svg" alt="Apple Logo" /></Link>
                        <Link href={'#'} className='socials'><img src="/images/instagram-logo.svg" alt="Instagram Logo" /></Link>
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