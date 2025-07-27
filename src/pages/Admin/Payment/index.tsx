import { type FC, useState } from "react";

import HeaderBlock from "../../../components/HeaderBlock";
import InnerNav from "../../../components/InnerNav";
import { Input, Button } from "antd";
import Category from "./ui/Category";
import Types from "./ui/Types";
import Statuses from "./ui/Statuses";
import Currencies from "./ui/Currencies";
import Qr from "./ui/Qr";

import { Search, Plus } from "lucide-react";

const navs = [
  {
    path: "category",
    text: "Kategoriýalar",
  },
  {
    path: "type",
    text: "Töleg görnüşleri",
  },
  {
    path: "status",
    text: "Töleg statuslary",
  },
  {
    path: "currency",
    text: "Pul birlikleri",
  },
  {
    path: "qr",
    text: "QR maglumatlary",
  },
];

const Payment: FC = () => {
  const [activeTab, setActiveTab] = useState("category");
  return (
    <div>
      <HeaderBlock title="Töleg sazlamalary" content="Baş Sahypa " />
      <InnerNav activeTab={activeTab} setActiveTab={setActiveTab} navs={navs} />

      <div className=" flex items-center justify-between mt-[40px]">
        <Input
          prefix={<Search />}
          placeholder="Gözleg"
          style={{ width: "25%", height: 40 }}
        />
        {activeTab === "qr" ? null : (
          <Button
            style={{
              backgroundColor: "#13A538",
              color: "white",
              height: 36,
              border: "none",
            }}
          >
            <Plus />
            Täze
          </Button>
        )}
      </div>
      {activeTab === "category" && <Category />}
      {activeTab === "type" && <Types />}
      {activeTab === "status" && <Statuses />}
      {activeTab === "currency" && <Currencies />}
      {activeTab === "qr" && <Qr />}
    </div>
  );
};

export default Payment;
