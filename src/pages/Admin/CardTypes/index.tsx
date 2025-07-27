import { type FC } from "react";

import HeaderBlock from "../../../components/HeaderBlock";
import { Input, Button } from "antd";
import ContactTable from "../../../components/PaymentTable";

import { Search, Plus } from "lucide-react";

const defaultData = [
  {
    key: "1",
    name: "Goýum kart",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Telekeçilik kart",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "3",
    name: "Adaty kart",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
];

const CardTypes: FC = () => {
  return (
    <div>
      <HeaderBlock title="Bank kart görnüşleri" content="Baş Sahypa " />

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

export default CardTypes;
