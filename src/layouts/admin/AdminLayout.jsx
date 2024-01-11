import React from 'react'
import '@/styles/admin/fastbootstrap.min.css'
import AdminHeader from './partials/AdminHeader'

const AdminLayout = ({children}) => {
  return (
    <>
        <AdminHeader />
        {children}
    </>
  )
}

export default AdminLayout