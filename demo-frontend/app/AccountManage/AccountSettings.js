"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
// import { IoSettingsSharp } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import React from 'react';
import Select from 'react-select';

export default function AccountSettings() {

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
<div className="ml-20">
            <p className="font-bold ml-2 mt-4 text-lg">Full Name</p>
              <div>
                <input
                  className="w-[70%] h-[15%] bg-transparent text-blue-gray-700 font-sans font-normal focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
              </div>
            <p className="font-bold ml-2 mt-4 text-lg">Full Name</p>
            <div>
                <input
                  className="w-[70%] h-[15%] bg-transparent text-blue-gray-700 font-sans font-normal focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
            
            </div>
            <p className="font-bold ml-2 mt-4 text-lg">Current Password</p>

            <div class="w-80 ml-19">
              <div class="relative w-full min-w-[200px] h-15">
                <input
                  className="w-[70%] h-[15%] bg-transparent text-blue-gray-700 font-sans font-normal focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
              </div>
            </div>
            <p className="text-[#b0b3b8] ml-8"></p>
            <p>
              Enter your current password to change the E-mail or password..
            </p>
            <p className="font-bold ml-2 mt-4 text-lg">New Password</p>
            <div class="w-80 ml-19">
              <div class="relative w-full min-w-[200px] h-15">
                <input
                  className="w-[70%] h-[15%] bg-transparent text-blue-gray-700 font-sans font-normal focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
              </div>
            </div>
            <p className="text-[#b0b3b8] ml-8"></p>
            <p className="font-bold ml-2 mt-4 text-lg">Confirm Password</p>
            <div class="w-80 ml-19">
              <div class="relative w-full min-w-[200px] h-15">
                <input
                  className="w-[70%] h-[15%] bg-transparent text-blue-gray-700 font-sans font-normal focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
              </div>
            </div>

            <div>
            <p className="font-bold ml-2 mt-4 text-lg">Local Settings</p>
            </div>
            <div className="w-[20%] flex-0 mr-[2%]">
            <Select options={options} />
            </div>
            <p className="font-bold ml-8">
              LDAP Server ID that puid was derived from. NULL if puid is
              independent of server configuration instance.
            </p>
            <div class="w-80 ml-19">
              <div class="relative w-full min-w-[200px] h-15">
                <input
                  className="w-[70%] h-[15%] bg-transparent text-blue-gray-700 font-sans font-normal focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                />
              </div>
            </div>
            <p className="font-bold ml-2 mt-4 text-lg">Picture</p>
            <div className="border border-gray-400 border-solid border-2 pb-6">
              <p className="font-bold ml-8 mt-8 text-xl">Update Picture</p>
              <div className="flex">
                <div className="flex-0">
                  <button
                    htmlFor="fileInput"
                    className="mt-2 ml-8 bg-gray-100 hover:bg-gray-200 text-black px-2 text-xl rounded border border-gray-400 hover:border-gray-600 focus:outline-none focus:shadow-outline"
                  >
                    Choose file
                  </button>
                </div>
                <div className=" mt-2 flex-0 ml-2">
                  <p>No file Choosen</p>
                </div>
              </div>
              <div className="ml-8 mt-2">
                <p>
                  Allowed file types:<strong>png gif jpg jpeg</strong>. <br />
                  Images must be between<strong>80x80</strong> and{" "}
                  <strong>250x250</strong>pixels
                  <br />
                  <strong>Note*</strong> - The profile picture is synced with
                  MyGov Sub-Domains only one time every 24 hours.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-0 mr-[25%]">
              <p className="font-bold ml-2 mt-4 text-lg">Date of Birth</p>
              </div>
              <div className="flex-0 ml-[25%]">
              <p className="font-bold ml-2 mt-4 text-lg">Gender</p>
              </div>
            </div>
            <div className="flex">
            <div className="w-[20%] flex-0 mr-[2%]">
            <Select options={options} />
            </div>
            <div className="w-[20%] flex-0 mr-[2%]">
            <Select options={options} />
            </div>
            <div className="w-[20%] flex-0 mr-[2%]">
            <Select options={options} />
            </div>
            <div className="w-[20%] flex-0 mr-[2%]">
            <Select options={options} />
            </div>
            </div>

            <p className="font-bold ml-2 mt-4 text-lg">Country</p>
            <div className="flex">
            <div className="h-20 w-[40%] flex-0 mr-[2%]">
            <Select options={options} />
            </div>
            <div className="h-20 w-[40%] flex-0 mr-[2%]">
            <Select options={options} />
            </div>
            </div>
            <button className="bg-blue-700 text-white h-[20%] w-[18%] mb-2 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Save
              </button>

          </div>
  );
}
