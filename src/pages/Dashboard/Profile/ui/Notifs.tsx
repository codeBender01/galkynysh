import type { FC } from "react";
import CustomSwitch from "../../../../components/CustomSwitch";

const Notifs: FC = () => {
  return (
    <div className="flex pt-9">
      <div className="w-[65%] flex flex-col gap-[10px]">
        <div className="text-[22px] font-popsemi text-black">
          Platforma bildirişleri
        </div>
        <div className="text-xs text-textGray3 font-popreg">
          Rugsat berilse, aýratyn teklipler, VIP sowgatlar we täze önümler
          barada gysgaça habarlar iberiler.
        </div>
      </div>
      <div className="mt-1">
        <CustomSwitch />
      </div>
    </div>
  );
};

export default Notifs;
