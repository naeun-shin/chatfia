import React from "react";
import Image from "next/image";
import { TextImageProps } from "@/types/interfaces/indexInterface";

const TextImage: React.FC<TextImageProps> = ({ title, text, image }) => {
  return (
    <div className="flex items-center justify-center font-bold pt-20 pb-20 space-x-32">
      <div>
        <div className="mb-4 text-4xl">{title}</div>
        <div className="text-lg">{text}</div>
      </div>
      <Image
        src={image}
        alt="마피아게임"
        width={600}
        height={300}
        priority={true}
      />
    </div>
  );
};

export default TextImage;
