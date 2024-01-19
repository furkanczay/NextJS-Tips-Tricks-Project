import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
    const { data: session } = useSession();
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" href="#"><Image src="/images/bootstrap-logo.svg" width={36} height={36} alt='admin logo'/></Link>
            <div className="collapse navbar-collapse" id="navbarExample">
            <ul className="navbar-nav me-auto mb-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">Team</Link>
                </li>
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
                </li>
            </ul>
            <div className="d-flex align-items-center flex-column flex-lg-row">
                <form className="me-2 mb-2 mb-lg-0">
                <input type="text" className="form-control form-control-sm" placeholder="Search" />
                </form>
                {session && (
                    <>
                        <span>{session?.user?.username}</span>
                        <button onClick={() => signOut()}>Çıkış Yap</button>
                    </>
                )}
            </div>
            </div>
        </div>
    </nav>
  )
}

export default AdminHeader