import { redirect } from 'next/navigation'
import SocialButton from '@/components/shared/button/SocialButton'
import LoginLogo from '@/components/shared/logo/LoginLogo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signup } from '@/lib/actions/auth/sign-up'
import { getSession } from '@/lib/actions/auth/session'
import AuthErrorMessage from '@/components/shared/message/AuthErrorMessage'

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: { message: string; _t: string }
}) {
  const session = await getSession()

  if (session) {
    redirect('/')
  }

  const handleSignUp = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
      return redirect(
        `/sign-up?message=Passwords do not match&_t=${Date.now()}`
      )
    }

    const { data, error } = await signup(formData)

    if (error) {
      const message = error.message
        ? error.message
        : 'Could not authenticate user'

      return redirect(`/sign-up?message=${message}&_t=${Date.now()}`)
    }

    return redirect(
      `/confirm?message=Check email(${email}) to continue sign in process`
    )
  }
  return (
    <>
      {searchParams?.message && (
        <AuthErrorMessage
          message={searchParams.message}
          time={searchParams._t}
        />
      )}
      <div className="w-[25rem] px-8 pb-12 pt-[2.375rem] flex gap-8 flex-col flex-nowrap rounded-[1.25rem] bg-white auth-shadow">
        <div className="flex flex-col gap-1">
          <LoginLogo />
          <h1 className="font-semibold leading-normal text-lg text-center">
            Sign Up
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
          <form action={handleSignUp} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label
                className="text-[rgb(20, 20, 20)] font-medium text-[0.8125rem] leading-[1.375] mb-2"
                htmlFor="email-address"
              >
                Email address
              </label>
              <Input
                id="email-address"
                name="email"
                placeholder="请输入邮箱"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[rgb(20, 20, 20)] font-medium text-[0.8125rem] leading-[1.375] mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="请输入密码"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-[rgb(20, 20, 20)] font-medium text-[0.8125rem] leading-[1.375] mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                placeholder="请输入密码"
                required
              />
            </div>
            <Button>Sign Up</Button>
          </form>
        </div>
      </div>
    </>
  )
}
