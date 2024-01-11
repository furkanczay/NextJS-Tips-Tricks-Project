import React from 'react'
import MainHeader from './partials/MainHeader'
import '@/styles/main/style.css'

const MainLayout = ({children}) => {
  return (
    <>
        <MainHeader />
        {children}
    </>
  )
}

export default MainLayout