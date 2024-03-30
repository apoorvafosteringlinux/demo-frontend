"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
// import { IoSettingsSharp } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";
import mygov_logo from "../../public/mygov_logo.png";
import swachh from "../../public/Swachh-Bharat-images.png";
import authITw from "../../public/auth-i-to-we.png";
import defaultIcon from "../../public/default-icon-for-user.png";
import Mygov_Innovation from "../../public/Mygov_Innovation-images.png";
import Mygov_blog from "../../public/Mygov_blog-images.png";
import Auth_ti from "../../public/auth-ti-logo_0.png";
import quiz from "../../public/quiz.png";
import haryana from "../../public/haryana-image.png";
import Maharashtra from "../../public/Maharashtra logo_for Auth.png";
import Assam from "../../public/assam.png";
// import IMG from '../../public/IMG_3404.png'
import chhattisgarh from "../../public/auth-dashboard-page-chhattisgarh.png";
import Manipur from "../../public/auth-dashboard-page-manipur_0.png";
import Arunachal from "../../public/auth-dashboard-page-arunachal.png";
import Tripura from "../../public/auth-dashboard-page-tripura_0.png";
import Jharkhand from "../../public/auth-dashboard-page-jharkhand_1.png";
import Nagaland from "../../public/auth-dashboard-page-nagaland.png";
import Himachal from "../../public/auth-dashboard-page-hp_0.png";
import Uttarkhand from "../../public/auth-dashboard-page-uk.png";
import Goa from "../../public/auth-dashboard-page-goa.png";
import Tamil from "../../public/auth-dashboard-page-tn_0.png";
import Uttar from "../../public/auth-dashboard-page-up_0.png";
import Jammu from "../../public/auth-dashboard-page-jk.png";
import Karnataka from "../../public/auth-dashboard-page-karnataka.png";
import Gujarat from "../../public/auth-dashboard-page-gujarat.png";
import Dadra from "../../public/auth-dashboard-page-ddd.png";
import Mizoram from "../../public/auth-dashboard-page-mizoram.png";
import Rajasthan from "../../public/auth-dashboard-page-rajasthan.png";
import Ladakh from "../../public/auth-dashboard-page-ladakh.png";
import Andaman from "../../public/auth-dashboard-page-andaman.png";
import nic_logo from "../../public/nic_logo.png";

export default function Apoo() {
    const { data: session, status } = useSession();
    // useEffect(() => {
    //     console.log('Hi Apoo', session)
    //     if (
    //       status != "loading" &&
    //       session &&
    //       session?.error === "RefreshAccessTokenError"
    //     ) {
    //       signOut({ callbackUrl: "/" });
    //     }
    //   }, [session, status]);
    
  return (
    // <main className="text-center">
    //   <h1 className="text-4xl" style={{color:"white"}}>Hello World!!</h1>
    // </main>


    <div className="bg-[#f0f4fb]">
      <div className="w-[90%] bg-[#f0f0f0] flex border-2 mx-[5%]">
        <div className="bg-[white] w-[30%]">
          <div className="flex">
            <div>
              <Image src={defaultIcon} className="h-12 w-14 m-4 flex-0" />
            </div>
            <div className="flex-0 my-10 ">ApoorvaSingh</div>
            {/* Logged in as <span className="text-yellow-100">{session.user.email}</span>{" "} */}
          </div>

          <hr className="mt-6 border-t border-gray-300 w-full" />
          <div class="flex flex-col">
            <div className="flex bg-white text-[#1d3b7b] font-bold py-4 px-4 transition-colors hover:bg-[#1d3b7b] hover:text-white  m-1 ">
                      <div className="flex-0"><IoSettingsSharp size={40} color="black"/></div>
            <a href="/AccountManage" class="flex-0 ml-4 button" >
              MANAGE ACCOUNT
            </a>
            </div>
            <button class="bg-[#1d3b7b] text-white font-bold py-4 px-4 m-1">
              DASHBOARD
            </button>
          </div>
        </div>

        <div className="bg-[white] ml-2 pl-4">
          <div className="text-[#66686c] text-base my-3">
            <h2 style={{ fontWeight: "bold" }}>MyGov</h2>
          </div>
          <div className="flex mb-6">
            <a
              href="https://secure.mygov.in/user/login"
              className="flex-0 flex"
            >
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={mygov_logo} className="h-12 w-20 m-2" />
              </div>
              <div
                target="__blank"
                className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-20 mr-6 flex-0 bg-[#f0f4fb]"
              >
                MyGov
              </div>
            </a>
            <a href="https://swachhbharat.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <a href="https://secure.mygov.in/">
                  <Image src={swachh} className="h-12 w-39.5 m-2" />
                </a>
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-40 mr-6 flex-0 bg-[#f0f4fb]">
                Swachhbharat
              </div>
            </a>
            <a href="https://self4society.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={authITw} className="h-12 w-39.5 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-59 mr-6 flex-0 bg-[#f0f4fb]">
                Self4Society
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://innovateindia.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Mygov_Innovation} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                Innovate India
              </div>
            </a>
            <a href="https://blog.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Mygov_blog} className="h-12 w-20 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Blog
              </div>
            </a>
            <a href="https://transformingindia.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Auth_ti} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                Transforming India
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://campus.mygov.in/" className="flex-0 flex">
              {/* <div className="border-2 border-[#d3ddf4]"><Image src={Mygov_Innovation} className='h-12 w-40 m-2'/></div> */}
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                Campus Ambassader Programme
              </div>
            </a>
            <a href="https://quiz.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={quiz} className="h-12 w-20 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov quiz
              </div>
            </a>
            <a href="https://haryana.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={haryana} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Haryana
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://maharashtra.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Maharashtra} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Maharashtra
              </div>
            </a>
            <a href="https://assam.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Assam} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Assam
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://mp.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Assam} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Madhya Pradesh
              </div>
            </a>
            <a href="https://chhattisgarh.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={chhattisgarh} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Chhattisgarh
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://manipur.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Manipur} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Manipur
              </div>
            </a>
            <a href="https://arunachal.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] bg-[#f0f4fb]">
                <Image src={Arunachal} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 bg-[#f0f4fb]">
                MyGov Arunachal Pradesh
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://tripura.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Tripura} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Tripura
              </div>
            </a>
            <a href="https://jharkhand.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Jharkhand} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Jharkhand
              </div>
            </a>
            <a href="https://nagaland.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] bg-[#f0f4fb]">
                <Image src={Nagaland} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Nagaland
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://himachal.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Himachal} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Himachal Pradesh
              </div>
            </a>
            <a href="https://uttarakhand.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Uttarkhand} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flx-0 bg-[#f0f4fb]">
                MyGov Uttarkhand
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://goa.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Goa} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Goa
              </div>
            </a>
            <a href="https://tamilnadu.mygov.in/user/login" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Tamil} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Tamil Nadu
              </div>
            </a>
            <a href="https://up.mygov.in/" className="flex flex-0">
              <div className="border-2 border-[#d3ddf4] bg-[#f0f4fb]">
                <Image src={Uttar} className="h-12 w-40 m-2 flex-0" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Uttar Pradesh
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://jk.mygov.in/" className="flex flex-0">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Jammu} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Jammu And Kashmir
              </div>
            </a>
            <a href="https://karnataka.mygov.in/user/login" className="flex flex-0">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Karnataka} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Karnataka
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://gujarat.mygov.in/user/login" className="flex flex-0">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Gujarat} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Gujarat
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://ddd.mygov.in/user/login" className="flex flex-0">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Dadra} className="h-12 w-50 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Dadra and Nagar Haveli and Daman and Diu
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://mizoram.mygov.in/user/login" className="flex flex-0">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Mizoram} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Mizoram
              </div>
            </a>
            <a href="https://rajasthan.mygov.in/" className="flex flex-0">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Rajasthan} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Rajasthan
              </div>
            </a>
          </div>

          <div className="flex mb-6">
            <a href="https://ladakh.mygov.in/user/login" className="flex-0 flex ">
              <div className="border-2 border-[#d3ddf4] flex-0 bg-[#f0f4fb]">
                <Image src={Ladakh} className="h-12 w-40 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Ladakh
              </div>
            </a>
            <a href="https://andaman.mygov.in/" className="flex-0 flex">
              <div className="border-2 border-[#d3ddf4] flex-0">
                <Image src={Andaman} className="h-12 w-45 m-2" />
              </div>
              <div className="border-2 border-[#d3ddf4] font-normal text-[#245c89] flex items-center justify-center w-62 mr-6 flex-0 bg-[#f0f4fb]">
                MyGov Andaman
              </div>
            </a>
          </div>
        </div>
      </div>
      <footer class="bg-white text-black py-4">
        <div class="container mx-auto">
          <div class="flex justify-center">
            <div className="flex-0">
              <a href="https://www.nic.in/" target="_blank">
                <Image src={nic_logo} className="m-4 h-[3rem]" />
              </a>
            </div>
            <div className="flex-0">
              <p class="text-center">
                © MyGov Auth platform is designed, developed and hosted by
                National Informatics Centre and
                <p>
                  this website belongs to MyGov Ministry of Electronics &
                  Information Technology Government of India
                </p>
                <p>auth-172 - Last Updated: 16/03/24</p>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
