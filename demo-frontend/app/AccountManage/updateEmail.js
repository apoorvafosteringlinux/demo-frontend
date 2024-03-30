"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
// import { IoSettingsSharp } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";


export default function updateEmail() {
  return (
    <div className="ml-16 text-xl min-h-[90%]">
            <div className="flex flex-col items-start">
              <h2 className="text-lg font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </h2>
              <input
                type="email"
                className="w-80 h-18 px-3 py-2 border border-gray-300 rounded-md mb-4 w-[30%] h-[12%]"
                required
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Add Email
              </button>
            </div>
          </div>
  );
}
