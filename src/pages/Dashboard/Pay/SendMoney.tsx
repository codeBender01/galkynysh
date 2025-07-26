import type { FC } from "react";

import person from "../../../assets/person7.png";
import Lock from "../../../svgs/Lock";
import qr from "../../../assets/qr2.png";
import IdCard from "../../../svgs/IdCard";
import Rocket from "../../../svgs/Rocket";

import { Input, Button } from "antd";

const SendMoney: FC = () => {
  return (
    <div className="w-[100%] mt-[18px] flex justify-between">
      <div className="w-[40%] bg-white rounded-[6px] flex flex-col items-center py-[40px] px-[38px] shadow-xl">
        <div className="flex gap-3">
          <div className="w-[75px] h-[75px]">
            <img
              src={person}
              alt=""
              className="w-[100%] h-[100%] rounded-full"
            />
          </div>
          <div>
            <div className="text-[22px] font-popsemi text-black">
              Dükan No: 2
            </div>
            <div className="text-xs text-textGray3 font-popreg">
              +993 62 232332
            </div>
          </div>
        </div>

        <div className="self-start mt-[70px] font-popsemi">Mukdar</div>
        <Input
          style={{
            fontSize: 22,
            border: "1.5px solid #13A538",
            padding: 12,
            marginTop: 12,
            color: "#13A538",
            fontFamily: "PopSemi",
          }}
        />
        <div className="mt-[20px] font-popm text-xs text-textGray3">
          Balans <span className="text-bg">50,78 TMT</span>
        </div>
        <div className="self-start mt-8 font-popsemi">Bellik</div>
        <Input
          style={{
            fontSize: 14,
            border: "1px solid #13A538",
            padding: 8,
            marginTop: 12,
            color: "#4E4E4E",
            fontFamily: "PopReg",
          }}
        />
        <div className="self-start mt-8 font-popsemi">Açar söz</div>
        <Input
          prefix={<Lock />}
          type="password"
          style={{
            fontSize: 14,
            border: "1px solid #13A538",
            padding: 8,
            marginTop: 12,
            color: "#4E4E4E",
            fontFamily: "PopReg",
          }}
        />
        <Button
          style={{
            backgroundColor: "#005A17",
            color: "white",
            fontSize: 18,
            marginTop: 60,
            width: "100%",
            height: 50,
          }}
        >
          <img className="h-8 w-8 mr-4" src={qr} alt="" />
          <span className="font-inter">QR kod arkaly töleg</span>
        </Button>
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
        <div className="mt-[20px] font-popm text-base text-textGray3">
          Töleg üçin <span className="text-bg">Tassykla</span>
        </div>
        <div className="flex gap-3 ml-12 mt-[56px]">
          <div className="w-[75px] h-[75px]">
            <img
              src={person}
              alt=""
              className="w-[100%] h-[100%] rounded-full"
            />
          </div>
          <div>
            <div className="text-[22px] font-popsemi text-black">
              Dükan No: 2
            </div>
            <div className="text-xs text-textGray3 font-popreg">
              +993 62 232332
            </div>
          </div>
        </div>

        <div className="shadow-lg mt-[20px] px-[45px] py-[20px] flex justify-between">
          <div>
            <div className="font-popreg text-xs">Töleg mukdary</div>
            <div className="text-[22px] text-red font-popsemi">45 TMT</div>
            <div className="text-[8px] text-textGray3 font-popreg">
              <span className="text-red">* </span>Hyzmat göterimi içinde
            </div>
          </div>
          <div>
            <div className="font-popreg text-xs">Galan balans</div>
            <div className="text-[22px] text-bg font-popsemi">5 TMT</div>
          </div>
        </div>
        <div className="shadow-lg mt-[20px] px-[45px] py-[20px] flex gap-3 items-center">
          <IdCard />
          <div className="flex flex-col gap-2">
            <div className="text-xs font-popsemi text-black">Dükan No: 2</div>
            <div className="text-xs text-textGray3 font-popreg">
              +993 62 232332
            </div>
          </div>
        </div>

        <div className="bg-bg border-paleGreen flex flex-col self-center items-center justify-center gap-3 text-sm text-white text-center border-[16px] border-solid mt-[40px] rounded-full h-[220px] w-[220px]">
          <Rocket />
          Töleg ugratmak üçin basyp sakla
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
