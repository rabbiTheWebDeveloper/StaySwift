import Link from "next/link";
import SocialLogin from "./SocialLogin";

const RegisterForm = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign up</h4>
        <form className="login-form">
          <div>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit" className="btn-primary w-full mt-4">
            Create account
          </button>
        </form>
        <Link href="/login" className="text-center text-xs text-gray-500">or Signup with</Link>
        <SocialLogin />
      </div>
    </section>
  );
};

export default RegisterForm;
