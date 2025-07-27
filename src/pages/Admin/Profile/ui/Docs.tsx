import type { FC } from "react";

import { Input } from "antd";
import Post from "../../../../components/Post";

import { Search } from "lucide-react";
import book1 from "../../../../assets/book1.png";
import book2 from "../../../../assets/book2.png";
import book3 from "../../../../assets/book3.png";

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

const Docs: FC = () => {
  return (
    <div className="my-[20px] flex flex-col gap-4">
      <div className="w-[100%] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-mainText font-popsemi text-2xl">
            Resminamalar
          </div>
          <div className="bg-bg rounded-full w-6 h-6 text-white flex justify-center items-center text-xs">
            6
          </div>
        </div>
        <Input
          prefix={<Search />}
          placeholder="Gözleg"
          style={{ width: "25%", height: 40 }}
        />
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        {posts.map((p, i) => {
          return <Post img={p.img} text={p.text} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Docs;
