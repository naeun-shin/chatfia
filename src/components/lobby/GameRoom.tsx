import React from "react";
import Image from "next/image";
import { GameRoomProps } from "../../types/interfaces/lobbyInterface";

const GameRoom: React.FC<GameRoomProps> = ({ image, roomNumber }) => {
  const imageSrc = `/imgs/room-${image}.png`;

  return (
    <>
      <div className="relative m-2 h-[250px] w-[280px] overflow-hidden">
        <div className="absolute h-full w-full">
          <Image
            src={imageSrc}
            alt={`room-${image}`}
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="absolute left-1/2 top-2/3 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center">
          <p className="mt-2 text-xl">{`Room ${roomNumber}`}</p>
          <p className="mb-4 opacity-50">4/6 Players</p>
          <p className="text-3xl font-bold">Join</p>
        </div>
      </div>
    </>
  );
};

export default GameRoom;
