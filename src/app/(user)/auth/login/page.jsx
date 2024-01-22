"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react'

const LoginPage = () => {
  // async function handleLogin(e){
  //   e.preventDefault()
  //   const username = e.target.username.value
  //   const password = e.target.password.value
  //   try{
  //     await signIn('credentials', { redirect: false, username, password })
  //   }catch(e){
  //     console.log(e)
  //   }
  // }

  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
  };
  
  return (
    <>
    <h3>login panel'in position'ı 1280px e göre ayarlandı. Ekran geçişlerine bakmak için 1280px e geçip kontrol edin. (DÜZENLENECEK!!)</h3>
    <div className="containerLoginPage">
      <div className="signInPage">
        <h1>Giriş Yap</h1>
        <div className="loginOption">
          <Link href={'#'}><Image width={16} height={16} src="/images/fb-logo.svg" alt="Facebook Logo" /></Link>
          <Link href={'#'}><Image width={16} height={16} src="/images/google-logo.svg" alt="Google Logo" /></Link>
          <Link href={'#'}><Image width={16} height={16} src="/images/apple-logo.svg" alt="Apple Logo" /></Link>
        </div>
        <p>ya da</p>
        <p>Üye bilgilerinizi giriniz</p>
        <form>
          <input type="email" name="email" placeholder="E-posta" />
          <input type="password" name="password" placeholder="Şifre" />
          <button type="submit">Giriş Yap</button>
          <Link href={'#'}><p>Şifreni mi unuttun ?</p></Link>
        </form>
      </div>
      <div className="signUpPage">
        <h1>Üye Ol</h1>
        <div className="loginOption">
          <Link href={'#'}><Image width={16} height={16} src="/images/fb-logo.svg" alt="Facebook Logo" /></Link>
          <Link href={'#'}><Image width={16} height={16} src="/images/google-logo.svg" alt="Google Logo" /></Link>
          <Link href={'#'}><Image width={16} height={16} src="/images/apple-logo.svg" alt="Apple Logo" /></Link>
        </div>
        <p>ya da</p>
        <p>Aşağıdaki bilgileri giriniz</p>
        <form>
          <input type="text" name="username" placeholder="Kullanıcı Adı" />
          <input type="email" name="email" placeholder="E-posta" />
          <input type="password" name="password" placeholder="Şifre" />
          <button type="submit">Üye Ol</button>
        </form>
      </div>
      <div className="loginPageText">
        <div className="signInText" style={{ display: isSignUp ? 'none' : 'block' }}>
          <h1>Hoşgeldiniz</h1>
          <h3>Lütfen kişisel bilgilerinizle giriş yapın</h3>
          <button className='goToSignIn' onClick={() => setIsSignUp(true)}>Giriş yapmak için tıklayınız</button>
        </div>
        <div className="signUpText" style={{ display: isSignUp ? 'block' : 'none' }}>
          <h1>Merhaba Arkadaşım</h1>
          <h3>Kişisel bilgilerinizi girin ve bizimle yolculuğa başlayın</h3>
          <button className='goToSignUp' onClick={() => setIsSignUp(false)}>Üye olmak için tıklayınız</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginPage