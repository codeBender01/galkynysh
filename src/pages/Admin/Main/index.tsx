import type { FC } from "react";

import UsersTable from "../../../components/Table";
import CustomButton from "../../../components/Button";
import Post from "../../../components/Post";
// import ProfileHeader from "../../../components/ProfileAdmin";

import bannerAdmin from "../../../assets/bannerAdmin.png";

import { cards, avatars, posts } from "./lib";

const Main: FC = () => {
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
        <div className="shadow-lg flex-1">
          <div className="mb-4 p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-1 font-popsemi">
              Täze Giren Ulanjylar
            </h1>
            <p className="text-sm text-gray-500">TM BIZ</p>
          </div>
          <UsersTable isTransactionNeeded={false} />
        </div>
        <div className="shadow-lg w-[360px] p-6">
          <h1 className="text-lg font-popsemi text-[#2A3547] mb-1">
            Top Ulanyjylar
          </h1>
          <ul className="mt-[30px] flex flex-col gap-8">
            {avatars.map((a) => {
              return (
                <li key={a.name} className="flex items-center gap-4">
                  <div>
                    <img src={a.avatar} alt="" />
                  </div>
                  <div>
                    <div className="text-mainText font-popsemi text-sm">
                      {a.name}
                    </div>
                    <div className="text-xs text-[#7C8FAC] font-popreg">
                      +993 61 727687
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <CustomButton
            text="Hemmesini Gör"
            style={{
              border: "1px solid #13A538",
              width: "100%",
              marginTop: 30,
              color: "#13A538",
              fontFamily: "PopReg",
              height: 36,
            }}
          />
        </div>
      </div>

      <div className="w-[100%] bg-lightBlue rounded-xl p-[30px] mt-[34px] flex items-center justify-between">
        <div>
          <div className="text-mainText font-popsemi text-[21px]">
            Soňky goýulan Postlar
          </div>
          <div className="text-sm text-[#7C8FAC] font-popreg">
            Şu günki sene
          </div>
        </div>
        <div className="max-h-[9%]">
          <img
            className="object-cover h-[100px] w-[100%]"
            src={bannerAdmin}
            alt=""
          />
        </div>
      </div>
      <div className="mt-9 flex justify-between ">
        {posts.map((p) => {
          return <Post img={p.img} text={p.text} />;
        })}
      </div>
    </main>
  );
};

export default Main;
