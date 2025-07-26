import { type FC, useState } from "react";

import card from "../../assets/bankCard.png";
import Lock from "../../svgs/Lock";
import ArrowUp from "../../svgs/ArrowUp";
import Danger from "../../svgs/Danger";

import { Modal, Divider } from "antd";

const MyCards: FC = () => {
  const [confirmModal, setConfirmModal] = useState(false);

  return (
    <div className="w-[100%] mt-[18px] flex justify-between">
      <div className="w-[100%] h-screen bg-grayBg2 rounded-[6px] shadow-xl py-[25px] px-[48px] flex flex-col">
        <div className="text-bg font-popsemi text-[20px]">Kartlaryňyz</div>
        <div
          className="text-xs font-popreg text-[#010101]"
          onClick={() => setConfirmModal(true)}
        >
          Dolandyrmak
        </div>
        <div className="flex items-center gap-6 mt-6">
          <div className="w-[45%]">
            <img src={card} alt="" className="object-cover w-[100%] h-[100%]" />
          </div>
          <div className="w-[45%]">
            <img src={card} alt="" className="object-cover w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
      <Modal
        open={confirmModal}
        onCancel={() => setConfirmModal(false)}
        footer={null}
        style={{
          maxWidth: 317,
        }}
      >
        <div className="flex flex-col ">
          <p className="text-bg font-inter font-bold text-[22px]">Kard menýu</p>
          <div className="flex items-center mt-[35px] gap-3 text-sm font-popreg text-[#4E4E4E]">
            <ArrowUp />
            Maglumatlary üýtget
          </div>
          <Divider
            style={{
              marginTop: 12,
              marginBottom: 12,
            }}
          />
          <div className="flex items-center gap-3 text-sm font-popreg text-[#4E4E4E]">
            <Danger />
            Bloklamak
          </div>
          <Divider
            style={{
              marginTop: 12,
              marginBottom: 12,
            }}
          />
          <div className="flex items-center gap-3 text-sm font-popreg text-[#4E4E4E]">
            <Lock />
            Parol goýmak
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyCards;
