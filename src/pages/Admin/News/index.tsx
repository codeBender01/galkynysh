import type { FC } from "react";

import HeaderBlock from "../../../components/HeaderBlock";
import Post from "../../../components/Post";

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

const News: FC = () => {
  return (
    <div>
      <HeaderBlock title="Habarlar" content="Baş Sahypa " />
      <div className="grid grid-cols-3 gap-[30px] mt-8">
        {posts.map((p, i) => {
          return <Post img={p.img} text={p.text} key={i} />;
        })}
      </div>
    </div>
  );
};

export default News;
