import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-box overflow-hidden shadow-xl bg-base-100 min-h-[500px]">
        
        {/* Left Side - Image (desktop only) */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="h-full w-full relative min-h-[500px]">
            <Image
              src="/login-bg.jpg"
              alt="Register"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold text-center mb-4">Register</h3>

            <Link href="/login" className="link link-primary block text-center mb-4">
              Go back to login
            </Link>

            <fieldset className="fieldset">
              <legend className="fieldset-legend text-lg font-semibold">Create Account</legend>

              <label className="fieldset-label mt-4">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Your name"
              />

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

              <label className="fieldset-label mt-4">Confirm Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Confirm password"
              />

              <button className="btn btn-success w-full mt-6">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
