import { Radio, ConfigProvider } from "antd";
import type { FC } from "react";

interface RadioProps {
  text: string;
  value: string;
}

const CustomRadioButton: FC<RadioProps> = ({ text, value }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            radioSize: 18,
            dotSize: 10,
            colorPrimary: "#13A538",
            colorPrimaryHover: "#73d13d",
          },
        },
      }}
    >
      <Radio
        value={value}
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#333",
          fontFamily: "Inter",
        }}
      >
        {text}
      </Radio>
    </ConfigProvider>
  );
};

export default CustomRadioButton;
