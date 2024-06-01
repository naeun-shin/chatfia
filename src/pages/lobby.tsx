import React from "react";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import GameRoom from "@/components/lobby/GameRoom";

export default function Lobby() {
  return (
    <div>
      <Header />
      <div className="my-40 flex flex-col text-center">
        <p className="text-4xl font-bold">게임로비</p>
        <p className="mb-4 font-bold">Start your Chatfia game now</p>
        <div className="flex justify-center">
          <Button variant="outline">방 만들기</Button>
        </div>
      </div>
      <div className="mb-20">
        <div className="flex justify-center">
          <GameRoom image="red" roomNumber={1} />
          <GameRoom image="black" roomNumber={2} />
          <GameRoom image="red" roomNumber={3} />
          <GameRoom image="black" roomNumber={4} />
          <GameRoom image="red" roomNumber={5} />
        </div>
        <div className="flex justify-center">
          <GameRoom image="black" roomNumber={6} />
          <GameRoom image="red" roomNumber={7} />
          <GameRoom image="black" roomNumber={8} />
          <GameRoom image="red" roomNumber={9} />
          <GameRoom image="black" roomNumber={10} />
        </div>
        <div className="flex justify-center">
          <GameRoom image="red" roomNumber={11} />
          <GameRoom image="black" roomNumber={12} />
          <GameRoom image="red" roomNumber={13} />
          <GameRoom image="black" roomNumber={14} />
          <GameRoom image="red" roomNumber={15} />
        </div>
      </div>
    </div>
  );
}
