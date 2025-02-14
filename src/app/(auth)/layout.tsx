import React from 'react'

const AuthLayout = ({
    children }: {
        children: React.ReactNode
    }) => {
  return (
    <div className='h-full bg-red-400'>{children}</div>
  )
}

export default AuthLayout