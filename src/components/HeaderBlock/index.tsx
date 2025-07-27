import type { FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  content: string;
}

const HeaderBlock: FC<Props> = ({ title, content }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] bg-lightBlue rounded-xl p-[30px] mt-[34px] flex items-center justify-between">
      <div>
        <div className="text-mainText font-popsemi text-[21px]">{title}</div>
        <div
          onClick={() => navigate("/admin/main")}
          className="text-sm text-[#7C8FAC] font-popreg"
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default HeaderBlock;
