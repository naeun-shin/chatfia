import React, { useState } from "react";
import Header from "@/components/header/Header";
import GameRoom from "@/components/lobby/GameRoom";
import { GameRoomProps } from "@/types/interfaces/lobbyInterface";
import GameRoomDialog from "@/components/lobby/GameRoomDialog";

export default function Lobby() {
  const [rooms, setRooms] = useState<GameRoomProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateRoom = (
    roomTitle: string,
    isPrivate: boolean,
    password: string,
  ) => {
    const newRoom: GameRoomProps = {
      image: "red",
      title: roomTitle,
      players: 1,
      private: isPrivate,
      password: isPrivate ? password : "",
    };
    setRooms((prevRooms) => [...prevRooms, newRoom]);
  };

  return (
    <>
      <Header />
      <div className="my-40 flex flex-col text-center">
        <p className="text-4xl font-bold">게임로비</p>
        <p className="mb-4 font-bold">Start your Chatfia game now</p>
        <div className="flex justify-center">
          <GameRoomDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onCreateRoom={handleCreateRoom}
          />
        </div>
      </div>
      <div className="mb-20">
        <div className="mx-auto grid max-w-fit grid-cols-5">
          {rooms.map((room, index) => (
            <div key={index} className="flex justify-center">
              <GameRoom
                image={index % 2 === 0 ? "red" : "black"}
                title={room.title}
                players={room.players}
                private={room.private}
                password={room.password}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
