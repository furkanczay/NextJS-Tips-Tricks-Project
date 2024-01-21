import React, { Suspense } from 'react'
import '@/styles/admin/fastbootstrap.min.css'
import AdminHeader from './partials/AdminHeader'
import { Toaster } from 'sonner'
import Loading from '@/app/admin/loading'

const AdminLayout = ({children}) => {
  return (
    <>
        <AdminHeader />
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
        <Toaster />
    </>
  )
}

export default AdminLayout