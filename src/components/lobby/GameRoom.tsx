import React, { useState } from "react";
import Image from "next/image";
import { GameRoomProps } from "../../types/interfaces/lobbyInterface";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

const GameRoom: React.FC<GameRoomProps> = ({
  image,
  title,
  players,
  private: isPrivate,
}) => {
  const [playerCount, setPlayerCount] = useState(players);
  const imageSrc = `/imgs/room-${image}.png`;

  const handleJoinRoom = () => {
    setPlayerCount((prevCount) => Math.min(prevCount + 1, 6));
  };

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
        {isPrivate && (
          <div className="absolute right-0 top-0 z-10 mr-2 mt-2">
            <Badge variant="outline" className="items-center">
              <Lock className="mr-1 h-3 w-3" />
              비공개
            </Badge>
          </div>
        )}
        <div className="absolute left-1/2 top-2/3 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform p-2 text-center">
          <p className="mt-2 line-clamp-2 text-xl">{title}</p>
          <p className="mb-4 opacity-50">{`${playerCount}/6 Players`}</p>
          <button
            onClick={handleJoinRoom}
            className="text-3xl font-bold transition-all ease-in-out hover:rotate-12 hover:scale-110 hover:transform hover:text-green-400"
          >
            Join
          </button>
        </div>
      </div>
    </>
  );
};

export default GameRoom;
