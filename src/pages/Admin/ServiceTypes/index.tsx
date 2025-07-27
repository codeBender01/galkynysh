import { type FC } from "react";

import HeaderBlock from "../../../components/HeaderBlock";
import { Input, Button } from "antd";
import ContactTable from "../../../components/PaymentTable";

import { Search, Plus } from "lucide-react";

const defaultData = [
  {
    key: "1",
    name: "Telekeçi",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Talyp",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Öý hojalykçy",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Beýlekiler",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
];

const ServiceTypes: FC = () => {
  return (
    <div>
      <HeaderBlock title="Hyzmat Görnüşleri" content="Baş Sahypa " />

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

export default ServiceTypes;
