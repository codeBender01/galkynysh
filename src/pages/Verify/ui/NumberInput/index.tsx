import { Input } from "antd";
import type { FC } from "react";

const NumberInput: FC = () => {
  return (
    <Input
      style={{
        width: 50,
        height: 53,
        outline: "none",
        border: "1.35px solid #13A538",
        fontSize: 20,
        fontFamily: "PopSemi",
        textAlign: "center",
        borderRadius: 8,
      }}
      type="numeric"
      maxLength={1}
    />
  );
};

export default NumberInput;
