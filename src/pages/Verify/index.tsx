import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/Button";
import NumberInput from "./ui/NumberInput";

const Verify: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="my-auto min-w-[70%]">
      <div className="text-mainText font-popsemi text-[20px]">
        Içeri girmek üçin tassykla
      </div>
      <p className="font-popreg text-sm text-mainText">
        Siziň telefon belgiňize ugradylan sms kody giriziň
      </p>
      <div className="mt-8 flex items-center justify-between">
        {[...Array(7)].map((i) => {
          return <NumberInput key={i} />;
        })}
      </div>
      <CustomButton
        onClick={() => navigate("/passport")}
        text="Dowam et"
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

      <p className="text-center text-bg mt-[22px] font-popm text-xs cursor-pointer hover:opacity-75 duration-150">
        Täzeden ugrat
      </p>
    </div>
  );
};

export default Verify;
