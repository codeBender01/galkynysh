import { type FC, useState } from "react";

import HeaderBlock from "../../../components/HeaderBlock";
import InnerNav from "../../../components/InnerNav";
import { Input } from "antd";

import UsersTable from "../../../components/Table";

import { Search } from "lucide-react";

import book1 from "../../../assets/book1.png";
import book2 from "../../../assets/book2.png";
import book3 from "../../../assets/book3.png";

export const posts = [
  {
    img: book1,
    text: "Post1",
  },
  {
    img: book2,
    text: "Post2",
  },
  {
    img: book3,
    text: "Post3",
  },
  {
    img: book1,
    text: "Post1",
  },
  {
    img: book2,
    text: "Post2",
  },
  {
    img: book3,
    text: "Post3",
  },
];
const navs = [
  {
    path: "category",
    text: "Ähli Tranzaksiýalar",
  },
  {
    path: "type",
    text: "Garaşylýar",
  },
  {
    path: "status",
    text: "Barlanýar",
  },
  {
    path: "currency",
    text: "Üstünlikli",
  },
];

const Transactions: FC = () => {
  const [activeTab, setActiveTab] = useState("category");
  return (
    <div>
      <HeaderBlock title="Tranzaksiýalar" content="Baş Sahypa " />
      <InnerNav activeTab={activeTab} setActiveTab={setActiveTab} navs={navs} />

      <div className=" flex items-center justify-between mt-[40px]">
        <Input
          prefix={<Search />}
          placeholder="Gözleg"
          style={{ width: "25%", height: 40 }}
        />
      </div>
      <UsersTable isTransactionNeeded={false} isStatusNeeded />
    </div>
  );
};

export default Transactions;
