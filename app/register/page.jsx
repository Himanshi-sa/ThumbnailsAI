import AuthLayout from "../../components/AuthLayout";


export default function RegisterPage() {
  return (
    <AuthLayout type="register">
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-lg font-semibold">Create Account</legend>

        <label className="fieldset-label mt-4">Name</label>
        <input type="text" className="input input-bordered w-full" placeholder="Your name" />

        <label className="fieldset-label mt-4">Email</label>
        <input type="email" className="input input-bordered w-full" placeholder="Email" />

        <label className="fieldset-label mt-4">Password</label>
        <input type="password" className="input input-bordered w-full" placeholder="Password" />

        <label className="fieldset-label mt-4">Confirm Password</label>
        <input type="password" className="input input-bordered w-full" placeholder="Confirm password" />

        <button className="btn btn-success w-full mt-6">Register</button>
      </fieldset>
    </AuthLayout>
  );
}
