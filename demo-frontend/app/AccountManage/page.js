"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
// import { IoSettingsSharp } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import Accountsettings from "./AccountSettings";
import referal from "../../public/refrel-bg.png";
import thankyou from "../../public/thanku-msg.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillFacebook } from "react-icons/ai";
import nic_logo from "../../public/nic_logo.png";

import UpdateEmail from "./updateEmail.js";
import AccountSettings from "./AccountSettings";
import UpdateNo from "./updateNo";
import DeactivateAccount from "./deactivateAccount";
import ShareYourCode from "./shareYourCode";

import React from "react";
import Select from "react-select";

import styles from "./Apoo.module.css";

export default function Apoo() {
  const [sessionData, setSessionData] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const { data: session, status } = useSession();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [state, setState] = useState(0);
  const myfunction = (val) => {
    console.log("apoo", val);
    console.log("preState", state);
    setState(val, () => {
      console.log("state", state);
    });
  };

  useEffect(() => {
    console.log("Hi Apoo, Hi Pc", session);
    console.log("preState", state);
    // let data = JSON.stringify(session)
    if (session) {
      setSessionData(session.user);
      console.log("heloooo", sessionData);
      setName(session.user.name);
      setMobile(session.newval);
    }

    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status, sessionData, name]);

  return (
    <div className="bg-[#f2f2f2] min-h-[750px]">
      <div className="bg-[#ffffff] w-[85%] mx-[7.2%] border-2 min-h-[700px]">
        <div className="m-4 flex text-lg text-gray-400">
          <div
            className={`flex-0 my-[10px] pr-[20px] ml-[20px] hover:text-blue-700 ${
              styles.button
            } ${state === 0 ? styles.active : ""}`}
            onClick={() => setState(0)}
          >
            {" "}
            <button onClick={() => myfunction(0)}>MY PROFILE</button>{" "}
          </div>
          <div
            className={`flex-0 my-[10px] pr-[20px] hover:text-blue-700 ${
              styles.button
            } ${state === 1 ? styles.active : ""}`}
            onClick={() => setState(1)}
          >
            <button onClick={() => myfunction(1)}>UPDATE EMAIL ID</button>
          </div>

          <div
            className={`flex-0 my-[10px] pr-[20px] hover:text-blue-700 ${
              styles.button
            } ${state === 2 ? styles.active : ""}`}
            onClick={() => setState(2)}
          >
            {" "}
            <button onClick={() => myfunction(2)}>ACCOUNT SETTINGS</button>{" "}
          </div>

          <div
            className={`flex-0 my-[10px] pr-[20px] hover:text-blue-700 ${
              styles.button
            } ${state === 3 ? styles.active : ""}`}
            onClick={() => setState(3)}
          >
            {" "}
            <button onClick={() => myfunction(3)}>
              UPDATE MOBILE NUMBER
            </button>{" "}
          </div>

          <div
            className={`flex-0 my-[10px] pr-[20px] hover:text-blue-700 ${
              styles.button
            } ${state === 4 ? styles.active : ""}`}
            onClick={() => setState(4)}
          >
            {" "}
            <button onClick={() => myfunction(4)}>
              DEACTIVATE ACCOUNT
            </button>{" "}
          </div>
          <div
            className={`flex-0 my-[10px] pr-[20px] hover:text-blue-700 ${
              styles.button
            } ${state === 5 ? styles.active : ""}`}
            onClick={() => setState(5)}
          >
            {" "}
            <button onClick={() => myfunction(5)}>
              SHARE YOUR REFERRAL CODE
            </button>{" "}
          </div>
        </div>
        <hr className="h-16"></hr>

        {state == 0 && (
          <div className="ml-[15px] min-h-[90%] text-xl">
            <p className="font-bold ml-8 mb-2">Full Name:</p>
            <p className="text-[#b0b3b8] ml-8 mb-2">{name}</p>
            <hr className="w-[60%] ml-8 mb-8"></hr>
            <p className="font-bold ml-8 mb-2">Mobile:</p>
            <p className="text-[#b0b3b8] ml-8">{mobile}</p>
            <hr className="w-[60%] ml-8 mb-8"></hr>
            <p className="font-bold ml-8 mb-2">Date of birth:</p>
            <p className="text-[#b0b3b8] ml-8">08-01-2002</p>
            <hr className="w-[60%] ml-8 mb-8"></hr>
            <p className="font-bold ml-8 mb-2">Gender</p>
            <p className="text-[#b0b3b8] ml-8">Female</p>
            <hr className="w-[60%] ml-8 mb-8"></hr>
          </div>
        )}

        {state == 1 && <UpdateEmail />}

        {state == 2 && <AccountSettings />}

        {state == 3 && <UpdateNo />}

        {state == 4 && <DeactivateAccount />}

        {state == 5 && <ShareYourCode />}
      </div>
    </div>
  );
}
