import { Button } from "antd";
import type { CSSProperties, FC } from "react";

interface ButtonProps {
  text: string;
  style?: CSSProperties;
}

const CustomButton: FC<ButtonProps> = ({ text, style }) => {
  return <Button style={style}>{text}</Button>;
};

export default CustomButton;
