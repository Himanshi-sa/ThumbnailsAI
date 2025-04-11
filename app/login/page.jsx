import AuthLayout from "../../components/AuthLayout";


export default function LoginPage() {
  return (
    <AuthLayout type="login">
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-lg font-semibold">Login</legend>

        <label className="fieldset-label mt-4">Email</label>
        <input type="email" className="input input-bordered w-full" placeholder="Email" />

        <label className="fieldset-label mt-4">Password</label>
        <input type="password" className="input input-bordered w-full" placeholder="Password" />

        <button className="btn btn-primary w-full mt-6">Login</button>
      </fieldset>
    </AuthLayout>
  );
}
