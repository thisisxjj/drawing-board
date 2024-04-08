'use server'

import { createClient } from '@/lib/supabase/server'

export async function getSession() {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return session
}
