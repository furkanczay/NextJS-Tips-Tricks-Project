import React from 'react'
import MainHeader from './partials/MainHeader'
import '@/styles/main/style.css'
import Footer from '@/components/main/Footer'

const MainLayout = ({children}) => {
  return (
    <>
        <MainHeader />
          {children}
        <Footer />
    </>
  )
}

export default MainLayout