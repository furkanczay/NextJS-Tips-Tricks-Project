import Link from 'next/link'
import React from 'react'

const APISidebar = () => {
  return (
    <aside>
      <div className='sidebar'>
            <h3 className='nav-item items-head'>Introduction</h3>
            <Link href="#" className='nav-item active'>
                  Welcome Docs 2.0
            </Link>
            <h3 className='nav-item items-head'>CHOOSE VERSION</h3>
            <Link href="#" className='nav-item'>
                  Unstable Version
            </Link>
            <Link href="#" className='nav-item'>
                  v1.0
            </Link>
            <Link href="#" className='nav-item'>
                  v2.0
            </Link>
            <Link href="#" className='nav-item'>
                  v2.1 beta
            </Link>
            <Link href="#" className='nav-item'>
                  v1.5 stable ver.
            </Link>

            <Link href="#" className='nav-item nav-item-btn'>
                  Next Step
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M7.11794 12.5275L12.4336 7.21191C12.6906 6.95759 12.6906 6.54199 12.4336 6.28495L7.11794 0.972078C6.86365 0.715037 6.44802 0.715037 6.19101 0.972078L5.58397 1.57911C5.32148 1.83888 5.32693 2.26271 5.59492 2.517L8.88983 5.65605H1.03125C0.667583 5.65605 0.375 5.94863 0.375 6.31229V7.18729C0.375 7.55096 0.667583 7.84354 1.03125 7.84354H8.88983L5.59492 10.9826C5.32968 11.2369 5.32421 11.6607 5.58397 11.9205L6.19101 12.5275C6.4453 12.7845 6.86093 12.7845 7.11794 12.5275Z" fill="white"/>
                  </svg>
            </Link>
      </div>
    </aside>
  )
}

export default APISidebar