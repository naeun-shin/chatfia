import React from "react";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
  return (
    <div>
      <header className="flex justify-center text-4xl font-bold pt-10 pb-10">
        주요 기능
      </header>
      <div className="flex justify-around pb-32">
        <div className="flex-col space-y-3">
          <div className="flex justify-center">
            <Image
              src="/imgs/feat-1.png"
              alt="playing"
              width={80}
              height={80}
            />
          </div>
          <p>몰입형 롤플레잉</p>
        </div>
        <div className="flex-col space-y-3">
          <div className="flex justify-center">
            <Image src="/imgs/feat-2.png" alt="web" width={80} height={80} />
          </div>
          <p>별도의 설치 필요없이 &quot;웹&quot;으로</p>
        </div>
        <div className="flex-col space-y-3">
          <div className="flex justify-center">
            <Image src="/imgs/feat-3.png" alt="chat" width={80} height={80} />
          </div>
          <p>실시간 채팅</p>
        </div>
      </div>
      <footer className="flex-col text-sm text-gray-400">
        <div className="flex justify-center mb-4">
          <div className="mr-4">
            제작 : hiryuji@kakao.com (FE), kingmandoo95@gmail.com (BE)
          </div>
          |
          <div className="mx-4 hover:text-green-300 cursor-pointer duration-300">
            서비스 이용약관
          </div>
          |
          <div className="ml-4 hover:text-green-300 cursor-pointer duration-300">
            개인정보 처리방침
          </div>
        </div>
        <div className="flex justify-center mb-2">
          &copy; 2024 Chatfia All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default KeyFeatures;
