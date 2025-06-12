import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function LandingPage() {
  const userId  = await auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <main className="bg-[url('/images/fitness-bg.jpg')]">
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to Workout Planner 💪
      </h1>
      <Link href="/Login" className="text-blue-500 underline block mb-2">
        Sign In
      </Link>
      <Link href="/Login" className="text-blue-500 underline">
        Sign Up
      </Link>
    </main>
  );
}
