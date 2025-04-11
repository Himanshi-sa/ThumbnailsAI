import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center rounded-box overflow-hidden shadow-xl bg-base-100">
        {/* Left Side - Image (only on md+) */}
        <div className="hidden md:block w-1/2 relative">
          <div className="aspect-[4/3] relative w-full">
            <Image
              src="/login-bg.jpg"
              alt="Login"
              fill
              className="object-cover rounded-l-box"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h3 className="text-2xl font-bold text-center mb-4">Login</h3>

          <Link href="/" className="link link-primary block text-center mb-4">
            Go back to home
          </Link>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-lg font-semibold">Login</legend>

            <label className="fieldset-label mt-4">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
            />

            <label className="fieldset-label mt-4">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
            />

            <button className="btn btn-primary w-full mt-6">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
