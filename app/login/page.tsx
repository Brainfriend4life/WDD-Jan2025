import Link from 'next/link'
import { login, signup } from './actions'; 

export default function LoginPage() {
  return (
    <form className="space-y-4">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />

      <div className="flex gap-4">
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </div>

      <div className="mt-4">
        <Link href="/login" className="text-blue-500 underline block mb-2">
          Sign In
        </Link>
        <Link href="/login" className="text-blue-500 underline">
          Sign Up
        </Link>
      </div>
    </form>
  )
}