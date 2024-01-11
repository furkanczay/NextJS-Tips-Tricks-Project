import AdminLayout from '@/layouts/admin/AdminLayout'
import React from 'react'

const AdminRootLayout = ({children}) => {
  return (
    <AdminLayout>
        {children}
    </AdminLayout>
  )
}

export default AdminRootLayout