import type { FC } from "react";

import ContactTable from "../../../../components/PaymentTable";

import { type ContactData } from "../../../../components/PaymentTable";

const defaultData: ContactData[] = [
  {
    key: "1",
    name: "#asdasd23123sd",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
];

const Qr: FC = () => {
  return <ContactTable data={defaultData} />;
};

export default Qr;
