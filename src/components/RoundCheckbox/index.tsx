import { Checkbox } from "antd";
import type { FC } from "react";
import "./CustomCheckbox.css";

const RoundCheckbox: FC = () => {
  return (
    <div className="custom-checkbox">
      <Checkbox />
    </div>
  );
};

export default RoundCheckbox;
