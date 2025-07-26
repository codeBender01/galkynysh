import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import PaperPlane from "../../../svgs/PaperPlane";
import Payment from "../../../svgs/Payment";
import Play from "../../../svgs/Play";
import Noting from "../../../svgs/Noting";
import banner from "../../../assets/banner.png";
import person1 from "../../../assets/person3.png";
import person2 from "../../../assets/person4.png";
import person3 from "../../../assets/person5.png";
import person4 from "../../../assets/person6.png";
import Plus from "../../../svgs/Plus";
import Search from "../../../svgs/Search";
import { Divider, Input } from "antd";

const icons = [
  {
    icon: <Play />,
    text: "Sapaklar",
  },
  {
    icon: <PaperPlane />,
    text: "Töleg Geçir",
    path: "/dashboard/pay/send",
  },
  {
    icon: <Payment />,
    text: "Töleg kabul et",
    path: "/dashboard/pay/receive",
  },
  {
    icon: <Noting />,
    text: "Arz et",
  },
];

const people = [
  {
    name: "Aman",
    img: person1,
  },
  {
    name: "Sähra",
    img: person2,
  },
  {
    name: "Ata",
    img: person3,
  },
  {
    name: "Atabaý",
    img: person4,
  },
  {
    name: "Wepa",
    img: person1,
  },
  {
    name: "Orazgül",
    img: person2,
  },
  {
    name: "Döwran aga",
    img: person3,
  },
];

const Pay: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] mt-[18px] flex justify-between">
      <div className="w-[50%] bg-white rounded-[6px] flex flex-col py-[40px] px-6 shadow-xl">
        <div className="text-bg font-popsemi text-[20px]">Töleg et</div>
        <div className="mt-[30px] w-[100%]">
          <img src={banner} alt="" className="w-[100%] object-cover" />
        </div>

        <div className="mt-[34px] flex items-center justify-between w-[100%]">
          {icons.map((i, idx) => {
            return (
              <div
                onClick={() => {
                  if (i.path) {
                    navigate(i.path);
                  }
                }}
                key={idx}
                className="flex flex-col items-center gap-[20px] cursor-pointer"
              >
                <div className="w-[53px] h-[53px] rounded-full bg-paleGreen2 flex items-center justify-center">
                  {i.icon}
                </div>
                <div className="text-[10px] text-[#4E4E4E] font-popreg">
                  {i.text}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between w-[100%] mt-[40px]">
          <div className="text-black font-popsemi text-base">Kontakt</div>
          <div className="font-popm text-bg text-xs">Hemmesi</div>
        </div>
        <div className="flex w-[100%] mt-[25px] gap-[30px]">
          <div className="bg-bg rounded-full w-[56px] h-[56px] text-white flex items-center justify-center text-4xl">
            <Plus />
          </div>
          {people.slice(0, 4).map((p) => {
            return (
              <div key={p.name} className="flex flex-col items-center gap-3">
                <div className="w-[56px] h-[56px] flex items-center justify-center text-4xl">
                  <img
                    src={p.img}
                    alt=""
                    className="rounded-full h-[100%] w-full"
                  />
                </div>
                <div className="font-popreg text-xs text-textGray3">
                  {p.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[45%] bg-white rounded-[6px] shadow-xl py-[25px] px-3 flex flex-col">
        <Input
          prefix={<Search />}
          style={{
            border: "none",
            backgroundColor: "#EEF2F5",
            width: "100%",
            borderRadius: 4,
            paddingBlock: 12,
            paddingInline: 12,
            fontSize: 14,
          }}
          placeholder="Ulanyjy ady ýa-da telefon belgi gözle"
        />
        <div className="mt-3">
          <div className="text-base font-popsemi text-black">Kontakt</div>
          <div className="text-xs text-textGray3 font-popreg">
            Töleg etmek üçin saýla
          </div>
        </div>

        <div>
          {people.map((p, i) => {
            return (
              <div>
                <div
                  key={p.name}
                  className="flex items-center mt-8 pl-12 gap-[20px]"
                >
                  <div>
                    <img src={p.img} alt="" />
                  </div>
                  <div>
                    <div className="text-base font-popsemi text-black">
                      {p.name}
                    </div>
                    <div className="text-xs text-textGray3 font-popreg">
                      (+993) 65 321321
                    </div>
                  </div>
                </div>
                {i !== people.length - 1 && <Divider />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pay;
