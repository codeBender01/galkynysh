import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import DefaultInput from "../../components/Input";
import CustomCheckbox from "../../components/Checkbox";
import CustomButton from "../../components/Button";
import { Form } from "antd";

import camera from "../../assets/camera.png";

const labelClassname = "font-popm text-mainText text-sm";

const PassportInfo: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="my-auto min-w-[70%] z-10 h-full py-[48px] overflow-scroll hide-scrollbar">
      <div className="text-mainText font-popsemi text-[30px]">Passport</div>
      <p className="font-popreg text-base text-mainText">
        Maglumatlaryňyzy dogry giriziň
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
          label={<label className={labelClassname}>Passport belgisi</label>}
        >
          <DefaultInput type="text" />
        </Form.Item>
        <Form.Item label={<label className={labelClassname}>Ady</label>}>
          <DefaultInput type="email" />
        </Form.Item>
        <Form.Item label={<label className={labelClassname}>Familiýasy</label>}>
          <DefaultInput type="numeric" />
        </Form.Item>
        <Form.Item
          label={<label className={labelClassname}>Atasynyň ady</label>}
        >
          <DefaultInput type="text" />
        </Form.Item>
        <Form.Item
          label={<label className={labelClassname}>Doglan senesi</label>}
        >
          <DefaultInput type="text" />
        </Form.Item>
        <Form.Item
          label={
            <label className={labelClassname}>Ýazgyda duran salgysy</label>
          }
        >
          <DefaultInput type="text" />
        </Form.Item>
        <Form.Item
          label={<label className={labelClassname}>Ýaşaýan salgysy</label>}
        >
          <DefaultInput type="text" />
        </Form.Item>
      </Form>
      <div className="w-[135px] h-[135px] bg-grayBg rounded-[10px] mb-6 flex items-center justify-center cursor-pointer relative">
        <div className="absolute text-xs top-2 text-textGray2 font-popreg">
          Suratyňyzy ýükläň
        </div>
        <div className="w-[50px] h-[50px]">
          <img src={camera} alt="" />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <CustomCheckbox />
        <p className="text-mainText font-popreg text-sm">
          Maglumatlaryň dogrulygy barada kepil geçýärin
        </p>
      </div>
      <CustomButton
        onClick={() => navigate("/other-info")}
        text="Indiki"
        style={{
          width: "100%",
          backgroundColor: "#13A538",
          marginTop: 32,
          color: "#fff",
          fontFamily: "PopReg",
          height: 48,
          borderRadius: 8,
          textTransform: "uppercase",
        }}
      />

      <div className="mt-8 flex items-center justify-between">
        <div className="font-inter uppercase text-black text-xs cursor-pointer">
          yza
        </div>
        <div className="text-textGray font-popreg">2/3</div>
        <div className="font-inter uppercase text-bg text-xs cursor-pointer">
          indiki
        </div>
      </div>
    </div>
  );
};

export default PassportInfo;
