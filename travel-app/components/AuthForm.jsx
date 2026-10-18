import Link from "next/link";

export default function AuthForm({ mode }) {
  const isSignup = mode === "signup";

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#6B5E51]/10 p-8">
      <h1 className="text-3xl font-bold text-[#6B5E51] mb-1">
        {isSignup ? "Create your account" : "Welcome back"}
      </h1>
      <p className="text-[#78909C] mb-6">
        {isSignup ? "Save places and reserve quiet stays." : "Log in to see your reservations."}
      </p>

      <form className="space-y-4">
        {isSignup && (
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-[#6B5E51]/20 rounded-lg px-4 py-3 text-[#6B5E51] outline-none"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[#6B5E51]/20 rounded-lg px-4 py-3 text-[#6B5E51] outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-[#6B5E51]/20 rounded-lg px-4 py-3 text-[#6B5E51] outline-none"
        />
        <button
          type="submit"
          className="w-full bg-[#81C784] text-[#F7F4EF] py-3 rounded-full font-medium"
        >
          {isSignup ? "Sign up" : "Log in"}
        </button>
      </form>

      <p className="text-sm text-[#78909C] mt-5 text-center">
        {isSignup ? "Already have an account? " : "New here? "}
        <Link href={isSignup ? "/login" : "/signup"} className="text-[#6B5E51] underline">
          {isSignup ? "Log in" : "Sign up"}
        </Link>
      </p>
    </div>
  );
}