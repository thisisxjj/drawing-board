import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/actions/auth/session'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getSession()

  if (!session) return redirect('/sign-in')

  return (
    <p>
      <Button variant="default">Click Me</Button>
    </p>
  )
}
