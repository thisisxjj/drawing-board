import SocialButton from '@/components/shared/button/SocialButton'
import LoginLogo from '@/components/shared/logo/LoginLogo'
import { login } from '@/lib/actions/auth/sign-in'
import { signup } from '@/lib/actions/auth/sign-up'

export default function LoginPage() {
  return (
    <div className="w-[25rem] px-8 pb-12 pt-[2.375rem] flex gap-8 flex-col flex-nowrap rounded-[1.25rem] bg-white auth-shadow">
      <div className="flex flex-col gap-1">
        <LoginLogo />
        <h1 className="font-semibold leading-normal text-lg text-center">
          Sign In
        </h1>
      </div>
      <div className="flex flex-col justify-start gap-8">
        <div className="grid grid-cols-1 gap-2">
          <SocialButton
            icon="https://img.clerk.com/static/google.svg?width=80"
            onClick={async () => {
              'use server'
            }}
          >
            Continue With Google
          </SocialButton>
        </div>
        <div className="flex flex-nowrap items-center justify-center">
          <div className="flex flex-nowrap items-stretch justify-start flex-1 h-[1px] bg-black/[0.16]"></div>
          <p className="text-[rgba(20,20,20,0.65)] text-[0.8125rem] font-medium leading-[1.375] ml-4 mr-4">
            or
          </p>
          <div className="flex flex-nowrap items-stretch justify-start flex-1 h-[1px] bg-black/[0.16]"></div>
        </div>
      </div>
    </div>
  )
}
