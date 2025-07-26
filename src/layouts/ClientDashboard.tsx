import type { FC } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

import { Divider } from "antd";

import logo from "../assets/logo.png";
import qr from "../assets/Qr.png";
import Home from "../svgs/Home";
import Pie from "../svgs/PieChart";
import Cards from "../svgs/Cards";
import Profile from "../svgs/Profile";
import Qr from "../svgs/Qr";
import sideElips from "../assets/sideElips.png";
import Bell from "../svgs/Bell";

const tabs = [
  {
    icon: <Home />,
    text: "Baş sahypa",
    link: "/dashboard/home",
  },
  {
    icon: <Pie />,
    text: "Statistika",
    link: "/dashboard/stats",
  },
  {
    icon: <Cards />,
    text: "Kartlarym",
    link: "/dashboard/my-cards",
  },
  {
    icon: <Profile />,
    text: "Profil",
    link: "/dashboard/profile",
  },
  {
    icon: <Qr />,
    text: "Töle",
    link: "/dashboard/pay",
  },
];

const ClientDashboard: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className="overflow-hidden max-h-[100vh] h-screen flex">
      <div className="h-full w-[355px] bg-bg px-8 py-12 relative">
        <div className="w-[100%]">
          <img src={logo} alt="" className="max-w-[100%] object-cover" />
        </div>
        <Divider className="bg-white" />
        <p className="text-[11px] text-white font-popm w-[85%]">
          Töleg platformasy döwlet edaralarynyň we hususy kompaniýalaryň
          arasynda aragatnaşygyň aňsatlaşmagyny, şeýle hem sanly tölegler arkaly
          ykdysadyýetiň hem-de bazar gatnaşyklarynyň çaltlaşmagyny gazanmagy göz
          öňünde tutýar.
        </p>
        <div className="absolute top-[20%] right-[-5%] w-[75px] h-[75px] bg-[white] flex items-center justify-center rounded-full border-[6px] border-bg">
          <img src={qr} alt="" />
        </div>
        <div className="absolute bottom-0 left-0">
          <img src={sideElips} alt="" />
        </div>

        <ul className="mt-[50px] flex flex-col gap-[15px] z-10 relative">
          {tabs.map((t) => {
            return (
              <li
                key={t.link}
                onClick={() => navigate(t.link)}
                className={`flex items-center font-popreg text-white gap-3 text-lg ${
                  location.pathname.includes(t.link)
                    ? "bg-darkerGreen"
                    : "bg-paleGreen"
                }  rounded-3xl py-3 px-5 cursor-pointer hover:bg-darkerGreen duration-150`}
              >
                {t.icon}
                {t.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex-1 p-[22px] overflow-scroll max-w-[1440px]">
        <div className="bg-grayBg relative z-10 w-[100%] flex items-center justify-between rounded-[6px] p-[18px] after:content-[''] after:bg-bg after:absolute after:w-[100%] after:top-0 after:h-[6px] after:left-0 after:rounded-t-3xl">
          <div className="">
            <div className="text-xs text-[#010101] font-popreg">
              Agza Adyňyz
            </div>
            <div className="text-bg text-[20px] font-popsemi">Aman Amanow</div>
          </div>
          <div className="relative">
            <div className="absolute h-[12px] w-[12px] rounded-full bg-bg top-[-10%] right-[-10%]"></div>
            <Bell />
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default ClientDashboard;
