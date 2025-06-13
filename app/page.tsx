import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function LandingPage() {
  const userId = await auth();

  if (userId) {
    redirect('/dashboard');
  }

  return (
    <main className="bg-[url('/images/background.jpg')] bg-cover bg-center min-h-screen text-center p-8">
      <h1 className="text-red-800 text-4xl font-bold mt-20">
        Welcome to Workout Planner 💪
      </h1>
      <Link href="/login" className="text-red-800 underline block mb-20">
        Sign In
      </Link>
      <Link href="/login" className="text-green-500 underline">
        Sign Up
      </Link>
    </main>
  );
}
