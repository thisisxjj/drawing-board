import Image from 'next/image'
import React from 'react'

const LoginLogo = () => {
  return (
    <div className="flex-center gap-x-2">
      <Image src="/logo.svg" alt="logo" width={60} height={60} />
      <span className="text-2xl font-semibold font-poppins">Board</span>
    </div>
  )
}

export default LoginLogo
