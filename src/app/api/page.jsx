import React from 'react'
import Image from 'next/image'

const ApiPage = () => {
  return (
    <>
      <h3>Welcome to Docs 2.0</h3>
      <div className='meta-data'>
            <Image className='docs-user-avatar' src="/images/empty-icon.png" width={30} height={30} alt='docs-user-avatar' />
            by Furkan Özay
            <div className='date-data'>
                  Last Updated : Mar 10, 2023
            </div>
      </div>
    </>
  )
}

export default ApiPage