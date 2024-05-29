import React from "react";
import Header from "@/components/header/Header";
import TextImage from "@/components/index/TextImage";
import ImageText from "@/components/index/ImageText";
import LastTextImage from "@/components/index/LastTextImage";

export default function Home() {
  return (
    <div>
      <Header />
      <TextImage
        title="마피아게임 좋아하시나요?"
        text="Do you like Mafia games?"
        image="/imgs/index-1.png"
        isTextLeft={true}
      />
      <ImageText
        title="지인들과 오프라인에서 즐기던 마피아게임을"
        text="We used to enjoy playing Mafia game offline with friends"
        image="/imgs/index-2.png"
        isTextLeft={false}
      />
      <div className="bg-custom">
        <TextImage
          title="별도의 설치 없이 | EASY"
          text="Without the need for separate installation"
          image="/imgs/index-1.png"
          isTextLeft={true}
        />
        <ImageText
          title="다른 사람들과 채팅하며 | FUN"
          text="Chatting with other people"
          image="/imgs/index-2.png"
          isTextLeft={false}
        />
      </div>
      <LastTextImage
        title="웹으로 즐기는 마피아 게임 | Chatfia"
        text="Mafia game enjoyed online."
        image="/imgs/index-5.png"
        isTextLeft={true}
      />
    </div>
  );
}
