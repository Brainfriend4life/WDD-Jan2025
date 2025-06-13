import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-radial from-sky-100 via-rose-100 to-pink-200">
      <form className="bg-white/70 backdrop-blur-md shadow-xl border border-gray-200 rounded-2xl px-10 py-12 w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10">
          Welcome Back
        </h1>

        <div className="mb-6 text-left">
          <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-8 text-left">
          <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="••••••••"
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            formAction={login}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition"
          >
            Log In
          </button>
          <button
            formAction={signup}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
