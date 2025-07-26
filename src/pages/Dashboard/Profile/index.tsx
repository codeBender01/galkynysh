import { type FC, useState } from "react";

import Switch from "../../../svgs/Switch";
import IdCard from "../../../svgs/IdCard";
import Theme from "../../../svgs/Theme";
import Chat from "../../../svgs/Chat";
import GreenBell from "../../../svgs/GreenBell";
import person from "../../../assets/person1.png";
import { Divider } from "antd";

import Notifs from "./ui/Notifs";
import ThemePage from "./ui/Theme";
import ChatPage from "./ui/Chat";

const tabs = [
  {
    icon: <IdCard />,
    title: "Şahsy maglumatlar",
    text: "Ynam we howpsuzlyk",
    id: "id",
  },
  {
    icon: <Theme />,
    title: "Tema",
    text: "Öz stiliňizi şahsylaşdyryň",
    id: "theme",
  },
  {
    icon: <GreenBell />,
    title: "Bildirişler ",
    text: "Habardar bol",
    id: "notif",
  },
  {
    icon: <Chat />,
    title: "Goldaw",
    text: "7/24 goldaw",
    id: "chat",
  },
  {
    icon: <Switch />,
    title: "Hasapdan çyk",
    text: "",
    id: "acc",
  },
];

const Profile: FC = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="w-[100%] mt-[18px] flex justify-between">
      <div className="w-[40%] h-screen bg-grayBg2 rounded-[6px] flex flex-col items-center py-[40px] px-[48px] shadow-xl">
        <div className="flex items-center gap-[18px]">
          <div className="w-[60px] h-[60px]">
            <img
              className="object-cover rounded-full w-[100%] h-[100%]"
              src={person}
              alt=""
            />
          </div>
          <div>
            <div className="text-[22px] font-popsemi text-black">
              Aman Amanow
            </div>
            <div className="text-xs text-textGray3 font-popreg">
              +993 62 459735
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-[60px]">
          {tabs.map((item) => {
            return (
              <div key={item.id}>
                <div
                  onClick={() => setActiveTab(item.id)}
                  className="flex items-center py-1 px-1 gap-[20px] hover:bg-paleGreen2 duration-200 cursor-pointer"
                >
                  {item.icon}
                  <div>
                    <div className="text-base font-popsemi text-black">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-textGray2 font-popreg">
                      {item.text}
                    </div>
                  </div>
                </div>
                {item.id !== "acc" && <Divider />}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[55%] bg-grayBg2 rounded-[6px] shadow-xl py-[25px] px-[48px] flex flex-col">
        {activeTab === "notif" && <Notifs />}
        {activeTab === "theme" && <ThemePage />}
        {activeTab === "chat" && <ChatPage />}
      </div>
    </div>
  );
};

export default Profile;
