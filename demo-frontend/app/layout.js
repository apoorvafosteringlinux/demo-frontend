import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "@/components/nav";
import AuthStatus from "../components/authStatus";
import SessionProviderWrapper from "@/utils/sessionProviderWrapper";
import nic_logo from "../public/nic_logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My demo",
  description: "Some description for my website",
};

export default function RootLayout({ children }) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div>
            <Nav />
            <div>{children}</div>
            <footer className="bg-white text-black py-4 bottom-0 inset-x-0">
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
        </body>
      </html>
    </SessionProviderWrapper>
  );
}
