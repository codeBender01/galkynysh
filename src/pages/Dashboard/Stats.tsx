import type { FC } from "react";

import Calendar from "../../svgs/Calendar";
import Cash from "../../svgs/Cash";
import Calculator from "../../svgs/Calculator";

import { Divider } from "antd";
import TransferCard from "../../components/TransferCard";
import PieChart from "../../components/PieChart";
import CustomButton from "../../components/Button";

const Stats: FC = () => {
  return (
    <div className="w-[100%] mt-[18px] flex justify-between">
      <div className="w-[100%] bg-grayBg2 rounded-[6px] shadow-xl py-[25px] px-[48px] flex flex-col">
        <div className="text-bg font-popsemi text-[20px]">Statistika</div>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <div className="w-fit ml-auto text-mainText text-xs font-popm flex items-center gap-3 mt-[20px]">
              <Calendar />
              Ýanwar 11, 2025
            </div>
            <PieChart />
            <div className="flex items-center mx-auto gap-2">
              <div className="bg-paleGreen3 rounded-[10px] flex items-center p-[18px] gap-3 w-[160px] justify-center">
                <Cash />
                <div className="flex flex-col items-center">
                  <div className="text-base text-black font-popsemi">
                    288,78 TMT
                  </div>
                  <div className="text-textGray3 text-xs font-popm">
                    Girdeýji
                  </div>
                </div>
              </div>
              <div className="bg-paleRed rounded-[10px] flex items-center p-[18px] gap-3 w-[160px] justify-center">
                <Calculator />
                <div className="flex flex-col items-center">
                  <div className="text-base text-black font-popsemi">
                    238 TMT
                  </div>
                  <div className="text-textGray3 text-xs font-popm">
                    Çykdaýjy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
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
      </div>
    </div>
  );
};

export default Stats;
