import { type FC, useState } from "react";

import ProfileHeader from "../../../components/ProfileAdmin";
import InnerNav from "../../../components/InnerNav";

import ProfileMain from "./ui/ProfileMain";
import Contacts from "./ui/Contacts";
import Docs from "./ui/Docs";

import { CircleUser, Users, Image } from "lucide-react";

const navs = [
  {
    path: "profil",
    text: "Profil",
    icon: <CircleUser />,
  },
  {
    path: "contact",
    text: "Kontakt",
    icon: <Users />,
  },
  {
    path: "doc",
    text: "Resminamalar",
    icon: <Image />,
  },
];

const Profile: FC = () => {
  const [activeTab, setActiveTab] = useState("profil");

  return (
    <div>
      <ProfileHeader
        userName="Aman Amanow"
        phoneNumber="+993 65 123123"
        transactionCount={938}
        contactCount={3586}
      />
      <InnerNav activeTab={activeTab} setActiveTab={setActiveTab} navs={navs} />
      {activeTab === "profil" && <ProfileMain />}
      {activeTab === "contact" && <Contacts />}
      {activeTab === "doc" && <Docs />}
    </div>
  );
};

export default Profile;
