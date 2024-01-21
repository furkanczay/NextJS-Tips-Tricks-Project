import React from 'react'
import '@/styles/admin/fastbootstrap.min.css'
import AdminHeader from './partials/AdminHeader'
import { Toaster } from 'sonner'

const AdminLayout = ({children}) => {
  return (
    <>
        <AdminHeader />
        {children}
        <Toaster />
    </>
  )
}

export default AdminLayout