import { TextImageProps } from "@/types/interfaces/indexInterface";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LastTextImage: React.FC<TextImageProps> = ({ title, text, image }) => {
  return (
    <div className="flex items-center justify-center font-bold pt-20 pb-20 space-x-32">
      <div>
        <div className="mb-4 text-4xl">{title}</div>
        <div className="text-lg">{text}</div>
        <div className="pt-4 space-x-4">
          <Button variant="outline">
            <Link href="/rule">게임설명</Link>
          </Button>
          <Button variant="outline">
            <Link href="/lobby">게임로비</Link>
          </Button>
        </div>
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
