import type { FC } from "react";

import head from "../../../assets/head.png";
import bag from "../../../assets/bag.png";
import mail from "../../../assets/mail.png";
import star from "../../../assets/star.png";
import chats from "../../../assets/chats.png";
import connect from "../../../assets/connect.png";

import UsersTable from "../../../components/Table";
// import ProfileHeader from "../../../components/ProfileAdmin";

const cards = [
  {
    img: head,
    text: "Resmi Hasaplar",
    number: 96,
    bg: "#EBFFF0",
    color: "#13A538",
  },
  {
    img: bag,
    text: "Adaty Ulanyjylar",
    number: 3650,
    bg: "#FEF5E5",
    color: "#FFAE1F",
  },
  {
    img: mail,
    text: "Gelen Hatlar",
    number: 356,
    bg: "#E8F7FF",
    color: "#49BEFF",
  },
  {
    img: star,
    text: "Bildirişler",
    number: 96,
    bg: "#FBF2EF",
    color: "#FA896B",
  },
  {
    img: chats,
    text: "Habarlar",
    number: 96,
    bg: "#E6FFFA",
    color: "#13DEB9",
  },
  {
    img: connect,
    text: "Tranzaksiýalar",
    number: 96,
    bg: "#EBF3FE",
    color: "#539BFF",
  },
];

const Main: FC = () => {
  //   const handleEditClick = () => {
  //     console.log("Edit button clicked");
  //   };

  return (
    <main>
      <div className="flex items-center gap-[30px] justify-between mt-6">
        {cards.map((c) => {
          return (
            <div
              style={{ backgroundColor: c.bg, color: c.color }}
              className="py-6 px-6 flex-1 flex flex-col items-center gap-3 rounded-lg"
            >
              <div>
                <img src={c.img} alt="" />
              </div>
              <div className="text-sm font-popm">{c.text}</div>
              <div className="text-[22px] font-popsemi">{c.number}</div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-[30px] mt-[30px]">
        <UsersTable />
        <div className="shadow-lg">
          <h1 className="text-2xl font-popm text-gray-900 mb-1 p-6">
            Top Ulanyjylar
          </h1>
        </div>
      </div>
      {/* <ProfileHeader
        userName="Aman Amanow"
        phoneNumber="+993 65 123123"
        transactionCount={938}
        contactCount={3586}
        onEditClick={handleEditClick}
      /> */}
    </main>
  );
};

export default Main;
