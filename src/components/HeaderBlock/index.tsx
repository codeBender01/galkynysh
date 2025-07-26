import type { FC } from "react";

interface Props {
  title: string;
  content: string;
}

const HeaderBlock: FC<Props> = ({ title, content }) => {
  return (
    <div className="w-[100%] bg-lightBlue rounded-xl p-[30px] mt-[34px] flex items-center justify-between">
      <div>
        <div className="text-mainText font-popsemi text-[21px]">{title}</div>
        <div className="text-sm text-[#7C8FAC] font-popreg">{content}</div>
      </div>
    </div>
  );
};

export default HeaderBlock;
