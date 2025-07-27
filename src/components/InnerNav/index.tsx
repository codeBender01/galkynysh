import type { Dispatch, FC, ReactElement, SetStateAction } from "react";

import "./inner-nav.css";

interface InnerNavProps {
  navs: {
    path: string;
    text: string;
    icon?: ReactElement;
  }[];
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
}

const InnerNav: FC<InnerNavProps> = ({ navs, setActiveTab, activeTab }) => {
  return (
    <ul className="w-[100%] bg-lightGreen rounded-lg mt-[25px] flex items-center gap-6 py-3 px-6">
      {navs.map((n) => {
        return (
          <li
            className={` ${
              n.path === activeTab
                ? "text-base text-bg font-popsemi "
                : "text-base text-[#2A3547] font-popreg"
            } cursor-pointer hover:text-bg relative flex items-center gap-2`}
            id={n.path === activeTab ? "active" : ""}
            onClick={() => {
              setActiveTab(n.path);
            }}
          >
            {n.icon ? n.icon : null}
            {n.text}
          </li>
        );
      })}
    </ul>
  );
};

export default InnerNav;
