"use client";
import Link from 'next/link';
import { useState } from 'react';


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-c2">
      <div className="md:w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-c1 shadow-lg rounded px-12 pt-6 pb-8 mb-4"
        >
          <div className="text-c3 text-2xl md:text-4xl font-semibold flex justify-center border-b-2 py-2 mb-4">
            Login
          </div>
          <div className="mb-4">
            <label
              className="block text-c3 text-sm md:text-lg font-normal mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-c1 bg-c3 placeholder:text-c1 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-c3 text-sm md:text-lg font-normal mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-c1 bg-c3 placeholder:text-c1 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full button font-semibold"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className='flex justify-center pt-4'>
            <Link href="/SignUp" className='text-c4 font-semibold'>Or Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
