import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";
import AuthStatus from "./authStatus";
import { CgLogOut } from "react-icons/cg";

export default function Nav() {
  return (
    <section>
      <div>
        <div className="bg-gradient-to-r from-[#203772] via-[#345ca2] to-[#203772] h-[7rem]">
          <div className="m-auto">
            <div className="flex justify-between">
              <div>
                <Image src={logo} className="h-auto m-6"/>
              </div>
              <div>
                <AuthStatus/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <ul className="mt-3">
    //   <li className="my-1"><Link className="hover:bg-gray-500" href="/">Home</Link></li>
    //   <li className="my-1"><Link className="hover:bg-gray-500" href="/products">Products</Link></li>
    //   <li className="my-1"><Link className="hover:bg-gray-500" href="/products/create">Create product</Link></li>
    // </ul>
  );
}
