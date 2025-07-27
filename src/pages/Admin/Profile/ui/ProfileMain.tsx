import type { FC } from "react";

import book1 from "../../../../assets/book1.png";
import book2 from "../../../../assets/book2.png";
import book3 from "../../../../assets/book3.png";

import { BriefcaseBusiness, MapPin } from "lucide-react";

import UsersTable from "../../../../components/Table";

const imgs = [
  book1,
  book2,
  book3,
  book1,
  book2,
  book3,
  book1,
  book2,
  book3,
  book1,
  book2,
  book3,
];

const ProfileMain: FC = () => {
  return (
    <div className="my-[20px] flex gap-4">
      <div className="w-[360px] flex flex-col gap-3">
        <div className="rounded-lg border-[1px] border-[#EAEFF4] p-6 ">
          <div className="font-popsemi text-[22px]">Maglumatlar</div>
          <p className="text-sm text-mainText font-popreg mt-3">
            Ulanyjy görnüşi; Adaty
          </p>

          <div className="text-mainText text-base font-popsemi flex items-center gap-3 mt-[20px] mb-4">
            <BriefcaseBusiness />
            Resmi ady ýok
          </div>
          <div className="text-mainText text-base font-popsemi flex items-center gap-3">
            <MapPin />
            AG
          </div>
        </div>
        <div className="rounded-lg border-[1px] border-[#EAEFF4] p-6 ">
          <div className="font-popsemi text-[22px]">Şahsy resminamalary</div>
          <div className="grid grid-cols-3 gap-4 mt-[20px]">
            {imgs.map((i, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={i}
                    className="rounded-sm h-[86px] object-cover"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <UsersTable isTransactionNeeded={false} />
    </div>
  );
};

export default ProfileMain;
