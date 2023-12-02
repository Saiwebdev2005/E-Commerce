"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-c2'>
    <div className="navbar max-w-6xl mx-auto text-c4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'block' : 'hidden'} lg:block`}>
            <li><Link href="#"><span>Shop Now</span></Link></li>
            <li>
              <Link href="#"><span>Categories</span></Link>
              <ul className="p-2">
                <li><Link href="#"><span>Men</span></Link></li>
                <li><Link href="#"><span>Women</span></Link></li>
              </ul>
            </li>
            <li><Link href="#"><span>New Arrivals</span></Link></li>
          </ul>
        </div>
        <Link href="#"><span className="btn btn-ghost text-xl">E-Com</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="#"><span>Shop Now</span></Link></li>
          <li>
            <details>
              <summary><Link href="#"><span>Categories</span></Link></summary>
              <ul className="p-2">
                <li><Link href="#"><span>Men</span></Link></li>
                <li><Link href="#"><span>Women</span></Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="#"><span>New Arrivals</span></Link></li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
      <Link href="#"><span className="btn bg-c4 text-c1">Cart</span></Link>
        <Link href="#"><span className="btn bg-c4 text-c1">Login</span></Link>
      </div>
    </div>
    </div>
  );
}
