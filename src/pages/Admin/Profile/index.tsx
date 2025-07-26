import { type FC, useState } from "react";

import ProfileHeader from "../../../components/ProfileAdmin";
import InnerNav from "../../../components/InnerNav";
import UsersTable from "../../../components/Table";

import { Button, Input } from "antd";
import { Search, Plus } from "lucide-react";

const navs = [
  {
    path: "all",
    text: "Ähli Ulanyjylar (2984)",
  },
  {
    path: "regular",
    text: "Adaty Ulanyjylar (2000)",
  },
  {
    path: "doc",
    text: "Resmi Ulanyjylar (984)",
  },
  {
    path: "add",
    text: "Täze Ulanyjy Goş",
  },
];

const Profile: FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      <ProfileHeader
        userName="Aman Amanow"
        phoneNumber="+993 65 123123"
        transactionCount={938}
        contactCount={3586}
      />
      <InnerNav activeTab={activeTab} setActiveTab={setActiveTab} navs={navs} />
      <div className="my-[20px]">
        <div className=" flex items-center justify-between">
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
            }}
          >
            <Plus />
            Täze ulanyjy
          </Button>
        </div>
        <UsersTable isTransactionNeeded />
      </div>
    </div>
  );
};

export default Profile;
