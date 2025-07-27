import { type FC } from "react";

import HeaderBlock from "../../../components/HeaderBlock";
import { Input, Button } from "antd";
import ContactTable from "../../../components/PaymentTable";

import { Search, Plus } from "lucide-react";

const defaultData = [
  {
    key: "1",
    name: "Ahal",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Mary",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Lebap",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Daşoguz",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Balkan",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
];

const Regions: FC = () => {
  return (
    <div>
      <HeaderBlock title="Welaýatlar" content="Baş Sahypa " />

      <div className=" flex items-center justify-between mt-[40px]">
        <Input
          prefix={<Search />}
          placeholder="Gözleg"
          style={{ width: "25%", height: 40 }}
        />
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
      </div>

      <ContactTable data={defaultData} />
    </div>
  );
};

export default Regions;
