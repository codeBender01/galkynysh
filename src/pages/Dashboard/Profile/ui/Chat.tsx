import type { FC } from "react";

import person from "../../../../assets/person2.png";
import SendPlane from "../../../../svgs/SendPlane";

const ChatPage: FC = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="text-bg font-popsemi text-[20px]">Goldaw</div>
      <div className="text-white text-sm font-popm bg-bg w-[60%] ml-auto py-[18px] px-[20px] rounded-b-3xl rounded-tl-3xl mt-12">
        Salam. Men platforma maglumatlarym ýatda saklanmady
      </div>
      <div className="relative">
        <div className="w-12 h-12 absolute bottom-[-30%]">
          <img src={person} className="rounded-full w-[100%] h-[100%]" alt="" />
        </div>
        <div className="text-textGray3 text-sm font-popm bg-[#EEEEEE] w-[70%] ml-[56px] mr-auto py-[18px] px-[32px] rounded-br-3xl rounded-t-3xl mt-6">
          Salam. Men platforma maglumatlarym ýatda saklanmady
        </div>
      </div>

      <div className="mt-auto bg-white flex items-center justify-between rounded-[30px] py-[16px] px-[22px] text-sm text-[#A1A1A1] font-popb">
        Hat ýaz
        <SendPlane />
      </div>
    </div>
  );
};

export default ChatPage;
