"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  // This effect runs once after the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render the component server-side
  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-c1">
      <div className="navbar max-w-6xl mx-auto text-c2">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-c1 rounded-box w-52 ${
                isOpen ? "block" : "hidden"
              } lg:block`}
            >
              <li>
                <Link href="\Shop">
                  <span>Shop Now</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>Categories</span>
                </Link>
                <ul className="p-2">
                  <li>
                    <Link href="\Categories\Men">
                      <span>Men</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="\Categories\Women">
                      <span>Women</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="\NewArrival">
                  <span>New Arrivals</span>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="\">
            <span className="btn btn-ghost text-xl md:text-4xl font-poppins">
              <span className="hidden md:block"> YumeAttire</span>
              <span className="block md:hidden">YA</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="\Shop">
                <span>Shop Now</span>
              </Link>
            </li>
            <li>
              <details className="z-10">
                <summary>
                  <Link href="#">
                    <span>Categories</span>
                  </Link>
                </summary>
                <ul className="p-2 bg-c1">
                  <li>
                    <Link href="\Categories\Men">
                      <span>Men</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="\Categories\Women">
                      <span>Women</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="\NewArrival">
                <span>New Arrivals</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <Link href="\Cart">
            <span className="button text-2xl mt-1.5">
              <AiOutlineShoppingCart />
            </span>
          </Link>
          {session ? (
            <div className="button text-2xl">
              <Link href="\DashBoard">
                <CgProfile />
              </Link>
            </div>
          ) : (
            <Link href="\User_Access">
              <span className="button text-xl ">Sign Up </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
