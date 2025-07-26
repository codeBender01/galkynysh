import type { FC } from "react";

import card from "../../assets/bankCard.png";
import Money from "../../svgs/Money";
import PaperPlane from "../../svgs/PaperPlane";
import Payment from "../../svgs/Payment";
import Play from "../../svgs/Play";
import Noting from "../../svgs/Noting";
import Calendar from "../../svgs/Calendar";
import Cash from "../../svgs/Cash";
import Calculator from "../../svgs/Calculator";

import { Divider } from "antd";
import TransferCard from "../../components/TransferCard";
import PieChart from "../../components/PieChart";
import CustomButton from "../../components/Button";

const icons = [
  {
    icon: <Play />,
    text: "Sapaklar",
  },
  {
    icon: <PaperPlane />,
    text: "Töleg Geçir",
  },
  {
    icon: <Payment />,
    text: "Töleg kabul et",
  },
  {
    icon: <Noting />,
    text: "Arz et",
  },
];
const cards = ["success", "danger", "success", "danger", "success", "danger"];

const DashboardHome: FC = () => {
  return (
    <div className="w-[100%] mt-[18px] flex justify-between">
      <div className="w-[45%] bg-grayBg2 rounded-[6px] flex flex-col items-center py-[40px] px-[48px] shadow-xl">
        <div className="w-[100%]">
          <img src={card} alt="" className="object-cover w-[100%] h-[100%]" />
        </div>
        <div className="bg-bg rounded-[6px] mt-[14px] w-[100%] py-4 px-4 flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Money />
            <div className="text-white">
              <div className="font-popsemi text-base">Kartdaky</div>
              <div className="text-xs font-popt">Balansyňyz</div>
            </div>
          </div>

          <Divider
            type="vertical"
            style={{
              backgroundColor: "white",
              height: 70,
              marginLeft: 20,
            }}
          />

          <div className="text-lg text-white font-popsemi">50,78 TMT</div>
        </div>

        <div className="mt-[34px] flex items-center justify-between w-[100%]">
          {icons.map((i, idx) => {
            return (
              <div
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
          <div className="text-black font-popsemi text-base">
            Soňky Tölegler
          </div>
          <div className="font-popm text-bg text-xs">Hemmesi</div>
        </div>
        <div className="w-[100%] mt-[20px] flex flex-col">
          {cards.map((t, i) => {
            return (
              <div key={i}>
                <TransferCard type={t} />
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[50%] bg-grayBg2 rounded-[6px] shadow-xl py-[25px] px-[48px] flex flex-col">
        <div className="text-bg font-popsemi text-[20px]">Statistika</div>
        <div className="ml-auto w-fit text-mainText text-xs font-popm flex items-center gap-3 mt-[20px]">
          <Calendar />
          Ýanwar 11, 2025
        </div>
        <PieChart />
        {/* charts */}
        <div className="flex items-center mx-auto gap-2">
          <div className="bg-paleGreen3 rounded-[10px] flex items-center p-[18px] gap-3 w-[160px] justify-center">
            <Cash />
            <div className="flex flex-col items-center">
              <div className="text-base text-black font-popsemi">
                288,78 TMT
              </div>
              <div className="text-textGray3 text-xs font-popm">Girdeýji</div>
            </div>
          </div>
          <div className="bg-paleRed rounded-[10px] flex items-center p-[18px] gap-3 w-[160px] justify-center">
            <Calculator />
            <div className="flex flex-col items-center">
              <div className="text-base text-black font-popsemi">238 TMT</div>
              <div className="text-textGray3 text-xs font-popm">Çykdaýjy</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-6 flex items-center justify-between gap-2">
          <CustomButton
            text="Girdeýjiler"
            style={{
              flex: 1,
              backgroundColor: "#13A538",
              color: "white",
              fontFamily: "PopMed",
              height: 40,
              border: "none",
            }}
          />
          <CustomButton
            text="Çykdaýjylar"
            style={{
              flex: 1,
              backgroundColor: "white",
              color: "#13A538",
              fontFamily: "PopMed",
              height: 40,
              border: "none",
            }}
          />
        </div>
        <div className="w-[100%] flex flex-col mt-8">
          {[...Array(7)].map((_, i) => {
            return (
              <div key={i}>
                <TransferCard type={"success"} />
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
