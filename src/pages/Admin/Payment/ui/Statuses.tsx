import type { FC } from "react";

import ContactTable from "../../../../components/PaymentTable";

import { type ContactData } from "../../../../components/PaymentTable";

const defaultData: ContactData[] = [
  {
    key: "1",
    name: "Garaşylýar",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "2",
    name: "Barlanýar",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
  {
    key: "3",
    name: "Üstünlikli geçirildi",
    date: "09.01.2025",
    phone: "+993 65 123123",
    role: "Admin",
  },
];

const Statuses: FC = () => {
  return <ContactTable data={defaultData} />;
};

export default Statuses;
