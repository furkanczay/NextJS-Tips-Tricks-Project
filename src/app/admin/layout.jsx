"use client"
import AdminLayout from '@/layouts/admin/AdminLayout'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const AdminRootLayout = ({children}) => {
  return (
<html lang="en">
	<body>
		<SessionProvider>
			<AdminLayout>
				{children}
			</AdminLayout>
		</SessionProvider>
	</body>
</html>
  )
}

export default AdminRootLayout