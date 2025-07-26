import type { FC } from "react";
import { EllipsisVertical } from "lucide-react";

interface PostProps {
  img: string;
  text: string;
}

const Post: FC<PostProps> = ({ img, text }) => {
  return (
    <div className="bg-[#fafafa] rounded-lg">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex justify-between items-center p-[20px]">
        <div>
          <div className="text-lg text-[#2A3547] font-popsemi">{text}</div>
          <div className="text-sm text-[#2A3547] font-popreg">01.02.2025</div>
        </div>
        <EllipsisVertical />
      </div>
    </div>
  );
};

export default Post;
