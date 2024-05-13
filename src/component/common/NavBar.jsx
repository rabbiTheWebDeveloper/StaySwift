import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav>
    <Link href="/">
      <Image src="./assets/stayswift.svg" alt="Stay Swift Logo" srcSet="" width={100} height={100} />
    </Link>
    <ul>
      <li>
        <Link href="#">Recommended Places</Link>
      </li>
      <li>
        <Link href="#">About Us</Link>
      </li>
      <li>
        <Link href="#">Contact us</Link>
      </li>
      <li>
        <Link href="/bookings">Bookings</Link>
      </li>
      <li>
        <Link href="/login" className="login">
          Login
        </Link>
      </li>
    </ul>
  </nav>
  
  );
};

export default NavBar;