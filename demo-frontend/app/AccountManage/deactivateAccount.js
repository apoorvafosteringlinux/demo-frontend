"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
// import { IoSettingsSharp } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

export default function Apoo() {
  return (
    <div className="ml-16 text-xl">
            <div className="flex flex-col items-start">
              <fieldset className="mb-4">
                <legend className="text-2xl font-semibold mb-2">
                  Deactivate Account
                </legend>
                <div className="flex flex-col space-y-2">
                  <h2>Please tell us why you are deactivating your account.</h2>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="options"
                      className="mr-2"
                      value="option1"
                    />
                    I have a duplicate account with different email id/phone
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="options"
                      className="mr-2"
                      value="option2"
                    />
                    I’m getting too many emails
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="options"
                      className="mr-2"
                      value="option3"
                    />
                    I’m not getting any value from my membership
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="options"
                      className="mr-2"
                      value="option3"
                    />
                    Have a Privacy Concern
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="options"
                      className="mr-2"
                      value="option3"
                    />
                    I’m receiving unwanted content
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="options"
                      className="mr-2"
                      value="option3"
                    />
                    Others
                  </label>
                  {/* Add more options as needed */}
                </div>
              </fieldset>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Submit
              </button>
            </div>
          </div>
  );
}
