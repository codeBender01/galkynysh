import type { FC } from "react";

import ContactTable from "../../../../components/PaymentTable";

import { type ContactData } from "../../../../components/PaymentTable";

const defaultData: ContactData[] = [
  {
    key: "1",
    name: "Bank hasaby arkaly",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Platforma hasaby",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "3",
    name: "QR kod arkaly",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
];

const Types: FC = () => {
  return <ContactTable data={defaultData} />;
};

export default Types;
