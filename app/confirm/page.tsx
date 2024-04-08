'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const ConfirmPage = ({
  searchParams,
}: {
  searchParams: { message: string }
}) => {
  const router = useRouter()

  const handleRedirect = () => {
    router.back()
  }

  return (
    <div className="relative px-4 min-h-screen items-start flex justify-center">
      <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
      <div className="bg-white rounded-lg md:max-w-md md:min-w-96 p-4 fixed inset-x-0 z-50 mx-4 mt-4 md:relative">
        <div className="md:flex items-center">
          <div>
            <p className="font-bold">Sign Up Successfully!</p>
            <p className="text-sm text-gray-700 mt-1">{searchParams.message}</p>
          </div>
        </div>
        <div className="text-center md:text-right mt-4 md:flex md:justify-end">
          <button
            onClick={handleRedirect}
            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmPage
