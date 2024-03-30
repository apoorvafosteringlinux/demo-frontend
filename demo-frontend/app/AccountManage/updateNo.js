"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
// import { IoSettingsSharp } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

export default function Apoo() {
  return (
    <div className="ml-20 text-xl">
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold mb-2">Your mobile number</h2>
              <p className="text-[black]  mb-8 font-size: 1.125rem">
                7454944441
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Update number
              </button>
            </div>
          </div>
  );
}
