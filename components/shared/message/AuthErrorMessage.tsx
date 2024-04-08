'use client'

import React, { useEffect, useRef } from 'react'

const AuthErrorMessage = ({
  message,
  time,
}: {
  message: string
  time: string
}) => {
  const messageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    messageRef.current?.classList.remove('opacity-0')

    const timeout = setTimeout(() => {
      messageRef.current?.classList.add('opacity-0')
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [time])

  return (
    <div
      ref={messageRef}
      className="absolute top-6 px-4 py-2 rounded-[1.25rem] bg-white shadow-md border transition-all"
    >
      {message}
    </div>
  )
}

export default AuthErrorMessage
