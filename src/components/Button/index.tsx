import { Button, type ButtonProps as AntdButtonProps } from "antd";
import type { CSSProperties, FC } from "react";

interface CustomButtonProps extends Omit<AntdButtonProps, "children"> {
  text: string;
  style: CSSProperties;
}

const CustomButton: FC<CustomButtonProps> = ({ text, style, ...props }) => {
  return (
    <Button {...props} style={style}>
      {text}
    </Button>
  );
};

export default CustomButton;
