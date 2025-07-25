import { type FC, useState } from "react";

import logo from "../../../../assets/logo.png";
import CustomButton from "../../../../components/Button";

import "./header.css";

const links = [
  {
    title: "Baş sahypa",
    id: 0,
  },
  {
    title: "Biz barada",
    id: 1,
  },
  {
    title: "Dokumentasiýa",
    id: 2,
  },
  {
    title: "Habarlar",
    id: 3,
  },
];

const Header: FC = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <header className="flex items-center justify-between px-[80px] py-[40px]">
      <div className="h-[48px] w-[200px]">
        <img src={logo} alt="" className="object-cover" />
      </div>

      <ul className="flex items-center gap-6">
        {links.map((l) => {
          return (
            <li
              onClick={() => setActiveLink(l.id)}
              key={l.id}
              className={
                l.id === activeLink
                  ? `font-popb text-white relative duration-200 cursor-pointer`
                  : "font-popm text-textGray4 relative duration-200 cursor-pointer hover:text-white"
              }
              id={l.id === activeLink ? "active" : ""}
            >
              {l.title}
            </li>
          );
        })}
      </ul>

      <CustomButton
        text="IÇERI GIR"
        style={{
          backgroundColor: "white",
          color: "#0C7D29",
          fontFamily: "PopSemi",
          borderRadius: 20,
          paddingInline: 20,
          height: 40,
        }}
      />
    </header>
  );
};

export default Header;
