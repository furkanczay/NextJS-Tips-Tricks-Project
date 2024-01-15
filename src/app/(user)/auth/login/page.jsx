"use client"
import React from 'react'
import { signIn } from 'next-auth/react'

const LoginPage = () => {
  function handleLogin(e){
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    signIn('credentials', { username, password })
  }
  return (
    <form onSubmit={handleLogin}>
      <input type="text" name='username' placeholder='username' />
      <input type="password" name='password' placeholder='password' />
      <button type='submit'>Giriş İsteği</button>
    </form>
  )
}

export default LoginPage