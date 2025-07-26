import type { FC } from "react";

import MoneyGreen from "../../svgs/MoneyGreen";

interface CardProps {
  type: string;
}

const TransferCard: FC<CardProps> = ({ type }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[14px]">
        <div>
          <MoneyGreen />
        </div>
        <div>
          <div className="text-base font-popsemi text-black">Söwda</div>
          <div className="text-[#4E4E4E] text-xs font-popreg">
            15:05 - 23.09.2023
          </div>
        </div>
      </div>
      <div
        className={`${
          type === "danger" ? "text-danger" : "text-bg"
        } font-popsemi text-base`}
      >
        12,50 TMT
      </div>
    </div>
  );
};

export default TransferCard;
