import { type FC, useState } from "react";

import CustomButton from "../../components/Button";
import CustomRadioButton from "../../components/CustomRadioButton";
import { Form, Radio, Divider, Modal } from "antd";

import tick from "../../assets/tick.png";

const labelClassname = "font-popm text-textGray text-xs";

const OtherInfo: FC = () => {
  const [confirmModal, setConfirmModal] = useState(false);

  return (
    <div className="my-auto min-w-[50%] z-10 h-full flex flex-col justify-center">
      <div className="text-mainText font-popsemi text-[30px]">Beýlekiler</div>
      <p className="font-popreg text-base text-mainText">
        Maglumatlaryňyzy dogry giriziň
      </p>

      <Form
        style={{
          marginTop: 32,
          display: "flex",
          flexDirection: "column",
        }}
        layout="vertical"
      >
        <Form.Item label={<label className={labelClassname}>Jynsy</label>}>
          <Radio.Group>
            <CustomRadioButton value="Erkek" text="Erkek" />
            <CustomRadioButton value="Aýal" text="Aýal" />
          </Radio.Group>
        </Form.Item>
        <Divider
          style={{
            marginTop: 0,
          }}
        />
        <Form.Item
          label={
            <label className={labelClassname}>Platforma hasap görnüşi</label>
          }
        >
          <Radio.Group>
            <CustomRadioButton value="Şahsy" text="Şahsy" />
            <CustomRadioButton value="Telekeçilik" text="Telekeçilik" />
          </Radio.Group>
        </Form.Item>
        <Divider
          style={{
            marginTop: 0,
          }}
        />
        <Form.Item
          label={<label className={labelClassname}>Platforma maksady</label>}
        >
          <Radio.Group>
            <CustomRadioButton value="Hyzmat" text="Hyzmat" />
            <CustomRadioButton value="Telekeçilik" text="Telekeçilik" />
            <CustomRadioButton value="Öý hojalyk" text="Öý hojalyk" />
            <CustomRadioButton value="Talyp" text="Talyp" />
            <CustomRadioButton value="Beýlekiler" text="Beýlekiler" />
          </Radio.Group>
        </Form.Item>
        <Divider
          style={{
            marginTop: 0,
          }}
        />
        <Form.Item label={<label className={labelClassname}>Welaýat</label>}>
          <Radio.Group>
            <CustomRadioButton value="Ahal" text="Ahal" />
            <CustomRadioButton value="Mary" text="Mary" />
            <CustomRadioButton value="Lebap" text="Lebap" />
            <CustomRadioButton value="Daşoguz" text="Daşoguz" />
            <CustomRadioButton value="Balkan" text="Balkan" />
          </Radio.Group>
        </Form.Item>
      </Form>

      <CustomButton
        onClick={() => setConfirmModal(true)}
        text="ÝATDA SAKLA"
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

      <div className="mt-8 flex items-center justify-between">
        <div className="font-inter uppercase text-black text-xs cursor-pointer">
          yza
        </div>
        <div className="text-textGray font-popreg">3/3</div>
        <div className="font-inter uppercase text-bg text-xs cursor-pointer">
          indiki
        </div>
      </div>

      <Modal
        open={confirmModal}
        onCancel={() => setConfirmModal(false)}
        footer={null}
        style={{
          maxWidth: 315,
        }}
      >
        <div className="flex flex-col items-center py-[86px]">
          <div className="w-[87px] h-[87px]">
            <img src={tick} alt="tick" className="w-[100%] object-cover" />
          </div>
          <p className="text-bg font-inter font-bold text-[22px] mt-[38px]">
            Maglumatlar
          </p>
          <p className="font-popreg text-textGray3 text-center text-xs">
            Girizilen maglumatlar üstünlikli ýatda saklandy
          </p>

          <CustomButton
            text="Baş sahypa"
            style={{
              backgroundColor: "#DCF6E2",
              marginTop: "30px",
              width: "100%",
              border: "none",
              color: "#13A538",
              height: 40,
              fontFamily: "PopMed",
              fontSize: 12,
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default OtherInfo;
