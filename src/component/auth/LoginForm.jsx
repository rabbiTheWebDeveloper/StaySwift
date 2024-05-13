"use client";
import Link from "next/link";
import SocialLogin from "./SocialLogin";
import { login } from "@/action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const fromData = new FormData(e.currentTarget);
      const response = await login(fromData);
      if (response?.ok) {
        router.push("/bookings");
      } else {
        setError(response?.error);
      }
    } catch (e) {
      setError(e.message)
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        {error && <p className="text-red-500">{error}</p>}
        <form className="login-form" onSubmit={onSubmit}>
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
        <Link href="/register" className="text-center text-xs text-gray-500">
          or Signup with
        </Link>
        <SocialLogin />
      </div>
    </section>
  );
};

export default LoginForm;
