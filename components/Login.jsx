"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await signIn("credentials", {
            email, password, redirect: false,
        });

        if (res.error) {
            setError("Invalid details");
            return;
        }

        router.replace("/");
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="text-white h-screen w-full mt-[rem] grid grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block">
        <Image
          className="w-full h-full object-cover"
          src="/images/office.jpg"
          alt="office"
          width={500}
          height={500}
        />
      </div>

      <div className="bg-[#121212] flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            {/* <label htmlFor="">Email</label> */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            {/* <label htmlFor="">Password</label> */}
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <Link href="#" className=" hover:text-gray-300">
              <p>Forgot Password</p>
            </Link>
            <Link href="/register" className=" hover:text-gray-300">
              <p>Create new account</p>
            </Link>
          </div>

          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign In
          </button>

          {error && (
            <div className="text-red-500">{error}</div>
          )}
          
        </form>
      </div>
    </div>
  );
};

export default Login;
