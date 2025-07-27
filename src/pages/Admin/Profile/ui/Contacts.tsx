import type { FC } from "react";

import { Input } from "antd";
import CustomButton from "../../../../components/Button";

import { Search, MapPin } from "lucide-react";

import avatar from "../../../../assets/avatar1.png";
import avatar2 from "../../../../assets/avatar2.png";
import avatar3 from "../../../../assets/avatar3.png";
import avatar4 from "../../../../assets/avatar4.png";
import avatar5 from "../../../../assets/avatar5.png";

const avatars = [avatar, avatar2, avatar3, avatar3, avatar4, avatar5];

const Contacts: FC = () => {
  return (
    <div className="my-[20px] flex flex-col gap-4">
      <div className="w-[100%] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-mainText font-popsemi text-2xl">Kontakt</div>
          <div className="bg-bg rounded-full w-6 h-6 text-white flex justify-center items-center text-xs">
            6
          </div>
        </div>
        <Input
          prefix={<Search />}
          placeholder="Gözleg"
          style={{ width: "25%", height: 40 }}
        />
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        {avatars.map((img, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between shadow-md p-5"
            >
              <div className="flex items-center gap-3">
                <div>
                  <img src={img} alt="" />
                </div>
                <div className="">
                  <div className="text-base text-mainText font-popsemi">
                    Kemal Sabyrow
                  </div>
                  <div className="flex text-sm font-popreg items-center gap-1">
                    <MapPin size={16} />
                    Ahal
                  </div>
                </div>
              </div>
              <CustomButton
                text="Doly oka"
                style={{
                  border: "1px solid #13A538",
                  color: "#13A538",
                  fontFamily: "PopReg",
                  height: 36,
                  fontSize: 12,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
