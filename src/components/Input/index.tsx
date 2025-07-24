import type { FC } from "react";

import { Input } from "antd";

interface InputProps {
  type: string;
}

const DefaultInput: FC<InputProps> = ({ type }) => {
  return (
    <Input
      type={type}
      style={{
        borderWidth: "1px",
        borderColor: "#eaeff4",
        minHeight: 48,
        borderRadius: 8,
      }}
    />
  );
};

export default DefaultInput;
