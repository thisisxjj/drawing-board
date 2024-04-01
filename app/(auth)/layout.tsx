import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center h-screen w-screen bg-[var(--background)] auth-container">
      {children}
    </div>
  )
}

export default AuthLayout
