'use server'

import { createClient } from '@/lib/supabase/server'
import { AuthError } from '@supabase/supabase-js'

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const res = await supabase.auth.signUp(data)

  if (res.data.user?.role !== 'authenticated') {
    res.error = new AuthError('Sign up Repeat Email!')
  }

  return res
}
