import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <>
        <ul>
            <li>Selam</li>
            <li>Merhaba</li>
        </ul>
        {children}
    </>
  )
}

export default AdminLayout