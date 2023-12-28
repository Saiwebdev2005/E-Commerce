"use client";
import { useState, useEffect } from "react";
import { signIn, getProviders } from "next-auth/react"; // Import getProviders
import { useRouter } from "next/navigation"; // Corrected from 'next/navigation'
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Fetch the providers
  const [providers, setProviders] = useState({});
  useEffect(() => {
    getProviders().then((providers) => setProviders(providers));
  }, []);

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
        redirect: false,
      });
      if (result.error) {
        setError("Invalid Credentials");
        return;
      }
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
        router.replace("/");
      }, 2000);
    }
  }, [showModal]);

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
          {/* Google provider */}
          {Object.values(providers).map((provider) => {
            if (provider.id === "google") {
              return (
                <div key={provider.name} className="">
                  <button
                    onClick={() => signIn(provider.id)}
                    className="flex items-center justify-center space-x-2 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-c3 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <FaGoogle />
                    <span>Sign in with {provider.name}</span>
                  </button>
                </div>
              );
            }
          })}
          {/* Horizontal line*/}
          <div className="relative my-4">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-c1 text-sm text-c3">or</span>
            </div>
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
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-black text-white p-12 rounded shadow-lg text-center">
              <h2 className="text-2xl mb-4">Login Successful!</h2>
              <div className="flex flex-col justify-center items-center space-x-1">
                <p>Redirecting</p>
                <span className="loading loading-dots loading-lg"></span>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center items-center">
          <Link href="/">
            <span className="text-xl font-sans text-c3">Back to Home</span>
          </Link>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    </div>
  );
}
