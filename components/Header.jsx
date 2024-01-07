"use client";

import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { signOut } from "next-auth/react";

const Header = () => {
  const [nav, setNav] = useState(false);
  // const [color, setColor] = useState('transparent')
  // const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="fixed bg-[#121212] text-white left-0 top-0 w-full ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
        <div>
          <Link href="/">
            <h1 className="font-bold text-4xl">LOGO</h1>
          </Link>
        </div>
        <div className="flex items-center gap-x-6">
          <ul className="hidden sm:flex">
            <li className="p-4">
              <Link href="/">Home</Link>
            </li>

            <li className="p-4">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <Link href="/login">
            <div className="border-teal-500 hover:border-teal-600 border-2 px-4 py-2 rounded space-x-4">
              <h1>Login</h1>
            </div>
          </Link> */}
        
            <button onClick={() => signOut()} className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-600 space-x-4">
              <h1>Log Out</h1>
            </button>
        
        </div>
        {/* Mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute text-white top-0 left-0 right-0 button-0 flex justify-center items-center w-full h-screen bg-[#1a1919] text-center ease-in duration-300"
              : "sm:hidden absolute text-white top-0 left-[-100%] right-0 button-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="">
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
