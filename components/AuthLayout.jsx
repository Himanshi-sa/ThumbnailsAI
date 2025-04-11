import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ type, children }) {
  const title = type === "login" ? "Login" : "Register";
  const linkText = type === "login" ? "Go to Register" : "Go to Login";
  const linkHref = type === "login" ? "/register" : "/login";
  const imageAlt = type === "login" ? "Login Image" : "Register Image";

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-box overflow-hidden shadow-xl bg-base-100 min-h-[500px]">

        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <div className="h-full w-full relative min-h-[500px]">
            <Image
              src="/login-bg.jpg"
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>

            <Link href={linkHref} className="link link-primary block text-center mb-4">
              {linkText}
            </Link>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
