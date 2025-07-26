import type { FC } from "react";

import person from "../../../assets/person7.png";
import urgent from "../../../assets/urgent.png";
import coins from "../../../assets/coins.png";
import settings from "../../../assets/settings.png";
import Cash from "../../../svgs/Cash";
import CaretDown from "../../../svgs/CaretDown";

import { Input, Button } from "antd";

const ReceiveMoney: FC = () => {
  return (
    <div className="w-[100%] mt-[18px] flex justify-between">
      <div className="w-[40%] bg-white rounded-[6px] flex flex-col py-[40px] px-[38px] shadow-xl">
        <div className="text-bg font-popsemi text-[20px]">Töleg kabul et</div>
        <div className="flex gap-3 flex-col items-center mt-[100px] self-center">
          <div className="w-[120px] h-[120px]">
            <img
              src={person}
              alt=""
              className="w-[100%] h-[100%] rounded-full"
            />
          </div>
          <div className="text-center">
            <div className="text-[22px] font-popsemi text-black">
              Aman Amanow
            </div>
            <div className="text-xs text-textGray3 font-popreg">
              +993 62 232332
            </div>
          </div>
        </div>

        <div className="self-start mt-[70px] font-popsemi">Mukdar</div>
        <Input
          style={{
            fontSize: 18,
            border: "1.5px solid #13A538",
            paddingBlock: 6,
            paddingInline: 12,
            marginTop: 12,
            color: "black",
            fontFamily: "PopSemi",
          }}
        />
        <div className="self-start my-[40px] font-popsemi">Kategoriýa</div>
        <div className="flex gap-2">
          <div className="flex flex-col items-center justify-between shadow-md w-[32%] py-[25px] px-2 border-red border-[2px]">
            <div>
              <img src={urgent} alt="" />
            </div>
            <div className="text-xs text-textGray3 font-popreg text-center">
              Gaýra goýulmasyz
            </div>
          </div>
          <div className="flex flex-col items-center justify-between shadow-md w-[32%] py-[25px] px-2 ">
            <div>
              <img src={coins} alt="" />
            </div>
            <div className="text-xs text-textGray3 font-popreg text-center">
              Haýyr sahabat
            </div>
          </div>
          <div className="flex flex-col items-center justify-between shadow-md w-[32%] py-[25px] px-2 ">
            <div>
              <img src={settings} alt="" />
            </div>
            <div className="text-xs text-textGray3 font-popreg text-center">
              Beýlekiler
            </div>
          </div>
        </div>

        <Button
          style={{
            backgroundColor: "#13A538",
            color: "white",
            fontSize: 18,
            marginTop: 15,
            width: "100%",
            height: 50,
          }}
        >
          <span className="font-inter">Dowam et</span>
        </Button>
      </div>
      <div className="w-[50%] bg-white rounded-[6px] shadow-xl py-[25px] px-[38px] flex flex-col">
        <div className="border-bg border-[1px] rounded-lg mt-[20px] px-[45px] py-[20px] flex gap-3 items-center">
          <Cash />
          <div className="flex flex-col gap-2">
            <div className="text-xs font-popsemi text-black">
              Soralan mukdar
            </div>
            <div className="text-lg text-black font-popsemi">75 TMT</div>
          </div>
        </div>
        <div className="self-start mt-[40px] font-popsemi">Kategoriýa</div>
        <Input
          style={{
            fontSize: 16,
            border: "1px solid #13A538",
            paddingBlock: 11,
            paddingInline: 25,
            marginTop: 12,
            color: "#4E4E4E",
            fontFamily: "PopReg",
          }}
          value={"Gaýra goýulmasyz"}
          suffix={<CaretDown />}
        />
        <div className="self-start mt-[40px] font-popsemi">Notes</div>
        <Input.TextArea
          rows={6}
          style={{
            fontSize: 16,
            border: "1px solid #13A538",
            paddingBlock: 11,
            paddingInline: 25,
            marginTop: 12,
            color: "#4E4E4E",
            fontFamily: "PopReg",
          }}
        />
        <Button
          style={{
            backgroundColor: "#13A538",
            color: "white",
            fontSize: 18,
            marginTop: 15,
            width: "100%",
            height: 50,
          }}
        >
          <span className="font-inter">Töleg sora</span>
        </Button>
      </div>
    </div>
  );
};

export default ReceiveMoney;
