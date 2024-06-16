import React from "react";
import Image from "next/image";
import { ContentProps } from "@/types/interfaces/indexInterface";

const TextImage: React.FC<ContentProps> = ({ title, text, image }) => {
  return (
    <div className="flex items-center justify-center space-x-32 pb-20 pt-20 font-bold">
      <Image
        src={image}
        alt="마피아게임"
        width={600}
        height={300}
        priority={true}
      />
      <div>
        <div className="mb-4 text-4xl">{title}</div>
        <div className="text-lg">{text}</div>
      </div>
    </div>
  );
};

export default TextImage;
