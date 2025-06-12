'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'

export async function login(formData: FormData) {
  const supabase = createServerActionClient({ cookies })
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    console.error('Login error:', error.message)
    return
  }

  redirect('/dashboard')
}

export async function signup(formData: FormData) {
  const supabase = createServerActionClient({ cookies })
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signUp({ email, password })
  if (error) {
    console.error('Signup error:', error.message)
    return
  }

  redirect('/dashboard')
}