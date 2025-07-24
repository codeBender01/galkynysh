import { type FC, useRef } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/Button";

import pass1 from "../../assets/pass1.png";
import pass2 from "../../assets/pass2.png";

const PassportFile: FC = () => {
  const uploadInput = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const triggerFileInput = () => {
    uploadInput.current?.click();
  };

  return (
    <div className="my-auto max-w-[60%] z-10 relative">
      <div className="text-mainText font-popsemi text-[22px] text-center">
        Passport
      </div>
      <p className="font-popt text-lg text-center mt-3 text-mainText">
        Passportyňyzyň birinji sahypasyny skanirlenen faýly ýükle
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div
          onClick={triggerFileInput}
          className="w-[80%] mx-auto cursor-pointer"
        >
          <img src={pass1} alt="" className="w-[100%] object-cover" />
        </div>
        <p className="font-popt text-lg text-center text-mainText">
          Passportyňyzyň soňky sahypasyny skanirlenen faýly ýükle
        </p>
        <div
          onClick={triggerFileInput}
          className="w-[80%] mx-auto cursor-pointer"
        >
          <img src={pass2} alt="" className="w-[100%] object-cover" />
        </div>
      </div>

      <input type="file" ref={uploadInput} className="hidden" />

      <CustomButton
        onClick={() => navigate("/passport-info")}
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

      <div className="fixed bottom-5 right-[8%] text-textGray">1/3</div>
    </div>
  );
};

export default PassportFile;
