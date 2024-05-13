import Link from "next/link";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <form className="login-form">
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="submit" className="btn-primary w-full mt-4">
            Login
          </button>
        </form>
        <Link href="/register" className="text-center text-xs text-gray-500">or Signup with</Link>
        <SocialLogin />
      </div>
    </section>
  );
};

export default LoginForm;
