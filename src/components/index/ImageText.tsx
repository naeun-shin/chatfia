import { ImageTextProps } from "@/types/interfaces/indexInterface";
import React from "react";
import Image from "next/image";

const TextImage: React.FC<ImageTextProps> = ({ title, text, image }) => {
  return (
    <div className="flex items-center justify-center font-bold pt-20 pb-20 space-x-32">
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
