"use client";
import { useState } from "react";
// Corrected import
import { signIn } from 'next-auth/react';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: true,
        callbackUrl: '/'
      });
      if (!result) {
        throw new Error('Login failed');
      }
      console.log("Logged In using login");
    } catch (error) {
      console.error(error);
      setError('Login failed'); // Set the error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-c2">
      <div className="md:w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-c1 shadow-lg rounded px-12 pt-6 pb-8 mb-4"
        >
          <div className="text-c3 text-2xl md:text-4xl font-semibold flex justify-center border-b-2 py-2 mb-4">
            Sign In
          </div>
          <div className="mb-4">
            <label
              className="block text-c3 text-sm md:text-lg font-normal mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-c1 bg-c3 placeholder:text-c1 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required={true}
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
              name="password"
              id="password"
              type="password"
              placeholder="**********"
              value={formData.password}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="w-full button font-semibold" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-red-600">{error}</p>
      </div>
    </div>
  );
}
