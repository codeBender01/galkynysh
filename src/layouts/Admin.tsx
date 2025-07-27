import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  FileText,
  Aperture,
  ShoppingBag,
  Grid2X2Plus,
  CircleCheckBig,
  ChartBarStacked,
  Award,
  ChartPie,
  Files,
  MapPin,
  MessageSquareText,
  Menu,
  Search,
  BellDot,
  Languages,
} from "lucide-react";
import { Divider } from "antd";
import avatar from "../assets/avatar1.png";
import { Outlet } from "react-router-dom";

import logo from "../assets/logoBlack.png";
import Switch from "../svgs/Switch";

const links = [
  {
    title: "Ulanyjylar",
    icon: <ShoppingBag />,
    path: "/admin/users",
    sublinks: [
      { value: "hemmesi", label: "Adaty ulanyjylar" },
      { value: "wideo", label: "Resmi Ulanyjylar" },
    ],
  },
  {
    title: "Habarlar",
    icon: <FileText />,
    path: "/admin/news",
    sublinks: [
      { value: "hemmesi", label: "Hemmesi" },
      { value: "wideo", label: "Wideo" },
      { value: "surat", label: "Surat" },
      { value: "toze-post-gos", label: "Töze Post Goş" },
    ],
  },
  {
    title: "Töleg sazlamalary",
    icon: <Grid2X2Plus />,
    path: "/admin/payment",
    sublinks: [
      { value: "hemmesi", label: "Kategoriýalar" },
      { value: "wideo", label: "Töleg görnüşleri" },
      { value: "surat", label: "Töleg statuslary" },
      { value: "toze-post-gos", label: "Pul birlikleri" },
      { value: "toze-post-gos", label: "QR maglumatlary" },
    ],
  },
  {
    title: "Tranzaksiýalar",
    path: "/admin/transactions",
    icon: <CircleCheckBig />,
  },
  {
    title: "Bank kart görnüşleri",
    path: "/admin/types",
    icon: <ChartBarStacked />,
  },
  {
    title: "Hasap görnüşleri",
    path: "/admin/accounts",
    icon: <Award />,
  },
  {
    title: "Hyzmat görnüşleri",
    path: "/admin/services",
    icon: <ChartPie />,
  },
];

const otherLinks = [
  "Gelen  Hatlar",
  "Bilidiriş ugrat",
  "Admin ulanyjylar",
  "Loglar",
];

interface DropdownOption {
  value: string;
  label: string;
}

interface SidebarDropdownProps {
  title: string;
  icon?: React.ReactNode;
  options: DropdownOption[];
  onSelect?: (value: string) => void;
  mainPath?: string;
}

const labelClassname = "text-[#5A6A85] text-sm font-popreg";

const SidebarDropdown: React.FC<SidebarDropdownProps> = ({
  title,
  icon,
  options,
  onSelect,
  mainPath,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (mainPath) {
      navigate(mainPath);
    }
  };

  const handleOptionClick = (option: DropdownOption) => {
    onSelect?.(option.value);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between  py-3 text-left hover:bg-bg rounded-md px-2 group hover:text-white transition-colors duration-200"
      >
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="text-gray-600 group-hover:text-white">{icon}</div>
          )}
          <span className={`group-hover:text-white ${labelClassname}`}>
            {title}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 group-hover:text-white transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="w-full flex items-center space-x-3 px-4 py-3 text-left group  hover:text-bg transition-colors rounded-md duration-150"
            >
              <div className="w-2 h-2 bg-gray-500 group-hover:bg-bg rounded-full flex-shrink-0" />
              <span className={`group-hover:text-bg ${labelClassname}`}>
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleSelection = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-[268px] flex flex-col items-center bg-white shadow-lg p-4">
        <div className=" w-[100%]">
          <div className="mt-[35px]">
            <img src={logo} alt="" />
          </div>

          <div
            onClick={() => navigate("/admin/main")}
            className={` flex items-center gap-2 mt-[70px] cursor-pointer hover:opacity-80 duration-200 ${labelClassname}`}
          >
            <Aperture />
            Baş Sahypa
          </div>

          <Divider
            style={{
              marginBlock: 12,
            }}
          />
          <div className="text-blue text-xs font-semibold mb-[20px]">
            MAGLUMATLAR
          </div>
          {links.map((l) => {
            if (l.sublinks) {
              return (
                <SidebarDropdown
                  title={l.title}
                  mainPath={l.path}
                  key={l.title}
                  icon={l.icon}
                  options={l.sublinks}
                  onSelect={handleSelection}
                />
              );
            }
            return (
              <button
                onClick={() => {
                  if (l.path) {
                    navigate(l.path);
                  }
                }}
                className="w-full flex items-center justify-between  py-3 text-left hover:bg-bg rounded-md px-2 group hover:text-white transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-gray-600 group-hover:text-white">
                    {l.icon}
                  </div>
                  <span className={`group-hover:text-white ${labelClassname}`}>
                    {l.title}
                  </span>
                </div>
              </button>
            );
          })}
          <Divider
            style={{
              marginBlock: 12,
            }}
          />
          <div className="text-blue text-xs font-semibold mb-[20px]">
            SAZLAMALAR
          </div>

          <button className="w-full flex items-center justify-between  py-3 text-left hover:bg-bg rounded-md px-2 group hover:text-white transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="text-gray-600 group-hover:text-white">
                <Files />
              </div>
              <span className={`group-hover:text-white ${labelClassname}`}>
                Post Sazlamalary
              </span>
            </div>
          </button>
          <button
            onClick={() => {
              navigate("/admin/regions");
            }}
            className="w-full flex items-center justify-between  py-3 text-left hover:bg-bg rounded-md px-2 group hover:text-white transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className="text-gray-600 group-hover:text-white">
                <MapPin />
              </div>
              <span className={`group-hover:text-white ${labelClassname}`}>
                Welaýatlar
              </span>
            </div>
          </button>
          <Divider
            style={{
              marginBlock: 12,
            }}
          />
          <div className="text-blue text-xs font-semibold mb-[20px]">
            Beýlekiler
          </div>
          {otherLinks.map((t) => {
            return (
              <button
                key={t}
                className="w-full flex items-center justify-between  py-3 text-left hover:bg-bg rounded-md px-2 group hover:text-white transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-gray-600 group-hover:text-white">
                    <MessageSquareText />
                  </div>
                  <span className={`group-hover:text-white ${labelClassname}`}>
                    {t}
                  </span>
                </div>
              </button>
            );
          })}
          <div
            onClick={() => navigate("/admin/profile")}
            className="bg-[#B3F2C3] mt-[30px] rounded-2xl py-4 px-4 flex items-center gap-2"
          >
            <div>
              <img src={avatar} alt="" />
            </div>
            <div>
              <div className="font-popsemi text-[#2A3547]">Ulanyjy Ady</div>
              <div className="text-[#7C8FAC] text-xs font-popreg">Role Ady</div>
            </div>
            <div className="ml-auto">
              <Switch />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-8">
        <div className="flex items-center justify-between">
          <div className="flex text-sm gap-6">
            <Menu />
            <Search />
          </div>
          <div className="flex items-center gap-6">
            <BellDot />
            <Languages />
            <div className="w-8 h-8">
              <img className="object-cover" src={avatar} alt="" />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
