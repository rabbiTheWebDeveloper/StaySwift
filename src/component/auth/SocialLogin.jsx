"use client";
import { signIn } from "next-auth/react";



const SocialLogin = () => {
  const handelAuth = (name) => {
    signIn(name , {callbackUrl: 'http://localhost:3000/bookings'});
  }
  return (
    <div className="flex gap-4">
        <button onClick={() => handelAuth("facebook")} className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <img src="./assets/fb.png" alt="" />
          <span>Facebook</span>
        </button>
        <button onClick={() => handelAuth("google")} className=" w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <img src="./assets/google.png" alt="" />
          <span>Google</span>
        </button>
      </div>
  );
};

export default SocialLogin;