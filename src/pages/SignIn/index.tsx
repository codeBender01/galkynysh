import type { FC } from "react";

import DefaultInput from "../../components/Input";
import CustomCheckbox from "../../components/Checkbox";
import CustomButton from "../../components/Button";
import { Form } from "antd";

const labelClassname = "font-popm text-mainText text-sm";

const SignIn: FC = () => {
  return (
    <div className="my-auto min-w-[70%]">
      <div className="text-mainText font-popsemi text-[30px]">Galkynyş</div>
      <p className="font-popreg text-base text-mainText">
        Dowam etmek üçin içeri giriň
      </p>

      <Form
        style={{
          marginTop: 32,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
        layout="vertical"
      >
        <Form.Item
          label={
            <label className={labelClassname}>Email ýa-da telefon belgi</label>
          }
        >
          <DefaultInput type="email" />
        </Form.Item>

        <Form.Item label={<label className={labelClassname}>Açar söz</label>}>
          <DefaultInput type="password" />
        </Form.Item>
      </Form>
      <div className="flex gap-2 items-center">
        <CustomCheckbox />
        <p className="text-mainText font-popreg text-sm">Ýatda sakla</p>
      </div>
      <CustomButton
        text="Içeri Gir"
        style={{
          width: "100%",
          backgroundColor: "#13A538",
          marginTop: 32,
          color: "#fff",
          fontFamily: "PopReg",
          height: 48,
          borderRadius: 8,
        }}
      />
    </div>
  );
};

export default SignIn;
