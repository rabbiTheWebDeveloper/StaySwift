"use client"
import { signOut } from 'next-auth/react';


const LogOut = () => {
  return (
    <li>
         <button onClick={() => signOut({ callbackUrl: '/login'})}  className="login ">
          LogOut
        </button>
    </li>
  );
};

export default LogOut;