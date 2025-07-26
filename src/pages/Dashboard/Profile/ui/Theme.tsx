import type { FC } from "react";

import RoundCheckbox from "../../../../components/RoundCheckbox";
import { Divider } from "antd";

const ThemePage: FC = () => {
  return (
    <div className="flex flex-col pt-9">
      <div className="w-[100%] flex gap-[10px]">
        <RoundCheckbox />
        <div>
          <div className="text-base font-popsemi text-black">Ak tema</div>
          <div className="text-[10px] text-textGray3 font-popreg">
            Açyk reňk tema
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-[100%] flex gap-[10px]">
        <RoundCheckbox />
        <div>
          <div className="text-base font-popsemi text-black">Gara tema</div>
          <div className="text-[10px] text-textGray3 font-popreg">
            Ýapyk reňk tema
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
