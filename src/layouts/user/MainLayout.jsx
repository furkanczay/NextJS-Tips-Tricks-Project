"use client"
import React from 'react'
import MainHeader from './partials/MainHeader'
import '@/styles/main/style.css'
import Footer from '@/components/main/Footer'
import { Toaster } from 'sonner'

const MainLayout = ({children}) => {
  return (
    <>
        <MainHeader />
        {children}
        
        <Footer />
        <Toaster />
    </>
  )
}

export default MainLayout