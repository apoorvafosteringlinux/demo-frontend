"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
// import { IoSettingsSharp } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import Refrel from "../../public/refrel-bg.png";
// import "./style.css";
import thankyou from "../../public/thanku-msg.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";

export default function ShareYourCode() {
  return (
    <div>
            <div className="ml-16">
              <p className="font-bold text-4xl">
                Refer MyGov to a friend & get points and badges.
              </p>
            </div>
            <div className="">
              <div className="flex justify-center z-0">
                <Image src={Refrel} className="h-[300px] w-[600px]" />
                <div className="absolute z-10 justify-center mt-44 ml-24 ">
                  <h1 className="text-3xl">Your referal code</h1>
                  <div className="bg-[#f2f6ff] w-[150px] border-[1px] border-[#b4cde4] text-[26px] font-bold text-[#2c498d] rounded-[4px] mt-[1px] pl-3 ml-[50px]">
                    MCYADK
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <FaSquareXTwitter size={"4rem"} />
                <AiFillFacebook color="blue" size={"4rem"} />
              </div>
            </div>
            <hr />
            <div className="flex  justify-center mt-6">
              <Image src={thankyou} className="flex-0 h-[10%] w-[25%]" />
              <div flex-1>
                <p className="text-xl mt-20  font-bold">YOU HAVE NOT</p>
                <br />
                <p className="text-xl mb-0 mt-[-25px] font-bold">
                  REFERRED USER
                </p>
                <br />
                <p className="text-xl mb-0 mt-[-25px] font-bold text-center">
                  USER
                </p>
              </div>
            </div>
          </div>
  );
}
