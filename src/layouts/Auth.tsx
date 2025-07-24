import type { FC } from "react";

import ellipsis1 from "../assets/ellipsis1.png";
import ellipsis2 from "../assets/ellipsis2.png";
import ellipsis3 from "../assets/ellipsis3.png";
import logo from "../assets/logo.png";

import Star from "../svgs/Star";

import { Outlet } from "react-router-dom";

const Auth: FC = () => {
  return (
    <main className="flex w-full h-screen">
      <div className="w-[50%] bg-bg relative flex items-center justify-center">
        <div className="absolute bottom-0 right-10">
          <img src={ellipsis1} alt="" />
        </div>
        <div className="absolute top-0 left-0">
          <img src={ellipsis2} alt="" />
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="z-10">
            <img src={logo} alt="logo" className="object-cover max-w-[100%]" />
          </div>
          <div className="bg-whiteThirty font-popreg text-white flex items-center gap-[6px] py-[13.5px] px-3 rounded-4xl">
            <Star />
            Galkynyş töleg platformasyna hoş geldiňiz
          </div>
        </div>
      </div>
      <div className="w-[50%] relative flex justify-center">
        <div className="absolute top-0 right-0">
          <img src={ellipsis3} alt="" />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default Auth;
