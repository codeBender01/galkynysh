import { type FC } from "react";
import Caret from "../../../../svgs/Caret";

interface QuestionProps {
  title: string;
  text: string;
  isActive: boolean;
  onClick?: () => void;
}

const Question: FC<QuestionProps> = ({ text, title, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={` ${
        isActive ? "border-[1px] border-bg" : "border-[1px] border-borderGray2"
      } rounded-xl p-6 cursor-pointer hover:border-bg hover:border-[2px] duration-100`}
    >
      <div className="flex items-center justify-between font-popm text-[20px] text-mainText duration-200">
        {title}
        <span className={isActive ? "rotate-0" : "rotate-90"}>
          <Caret />
        </span>
      </div>
      <p
        className={`${
          isActive ? "h-auto opacity-100 mt-3" : "h-0 opacity-0"
        } text-base text-[#706183] font-popreg duration-200`}
      >
        {text}
      </p>
    </div>
  );
};

export default Question;
