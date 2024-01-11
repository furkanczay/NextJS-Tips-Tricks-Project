import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const MainHeader = () => {
    const { data: session } = useSession();
  return (
    <header className='main-header'>
        <div className='main-header__brand'>
            <h1>Tips&Tricks</h1>
        </div>
        <div className='main-header__auth'>
            {!session ? (
                <>
                    <button className='btn' onClick={() => signIn("credentials", { redirect: false, username: "furkanczay2", password: "Test123!" })}>Sign In</button>
                    <button className='btn register-btn' onClick={() => signIn()}>Register</button>
                </>
            ) : (
            <>
                <span>{session.user.name}</span>
                <button onClick={() => signOut({redirect:false})}>Sign Out</button>
            </>
            )}
        </div>
    </header>
  )
}

export default MainHeader