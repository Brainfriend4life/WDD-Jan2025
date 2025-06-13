import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function LandingPage() {
  const userId = await auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <main className="bg-[url('/images/bg.jpg')] bg-cover bg-center min-h-screen text-center p-8">
      <h1 className="text-green-700 text-5xl font-bold mt-20">
        Welcome to Workout Planner
      </h1>
      <Link href="/login" className="text-amber-300 text-3xl text-right underline block -mt-15">
        Sign In
      </Link>
      <Link href="/login" className="text-orange-400 text-3xl text-right underline block -mt-20">
        Sign Up
      </Link>
    </main>
  );
}
