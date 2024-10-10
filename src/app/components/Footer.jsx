import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-green-600">
      <div className="pt-[233px] pb-[65px]  container">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-y-9 ">
              <Image src="/images/footerlogo.png" width={148} height={48} />

              <div className="font-roboto font-bold text-sm py-[11px] px-[16px]  text-white  bg-green-400 rounded-lg text-center w-max">
                Pakistan . English (UK) . RS PKR
              </div>
            </div>

            <div className="flex justify-end">
              <ul className="flex flex-col gap-y-4">
                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Help</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Privacy Setting</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Login</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2  ">
            <div className="flex justify-end">
              <ul className="flex flex-col gap-y-4">
                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Cookie Policy</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Privacy Policy</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Terms of Service</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Company Detail</Link>
                </li>
              </ul>
            </div>

            <div className=" flex justify-end">
              <ul className="flex flex-col gap-y-4">
                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Explore</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Company</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Partners</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">Trips</Link>
                </li>

                <li className="font-roboto font-bold text-sm text-white">
                  <Link href="#">International Sites</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
