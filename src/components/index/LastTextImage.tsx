import { TextImageProps } from "@/types/interfaces/indexInterface";
import React from "react";
import Image from "next/image";

const LastTextImage: React.FC<TextImageProps> = ({ title, text, image }) => {
  return (
    <div className="flex items-center justify-center pt-20 pb-20 space-x-32">
      <div>
        <div className="mb-4 text-4xl">{title}</div>
        <div className="text-l">{text}</div>
      </div>
      <Image
        src={image}
        alt="마피아게임"
        width={300}
        height={300}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LastTextImage;
