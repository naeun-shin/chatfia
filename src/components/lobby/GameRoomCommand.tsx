import React from "react";
import { Search } from "lucide-react";
import { GameRoomCommandProps } from "@/types/interfaces/lobbyInterface";

const GameRoomCommmand: React.FC<GameRoomCommandProps> = ({
  searchInput,
  handleSearchInputChange,
}) => {
  return (
    <div className="mx-auto mb-20 w-1/3 justify-center">
      <div className="flex items-center border-b px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          type="text"
          placeholder="방 검색"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
      <div className="mt-4 flex justify-end space-x-4 text-sm">
        <p className="cursor-pointer duration-300 hover:text-green-300">
          등록일순
        </p>
        <p className="cursor-pointer duration-300 hover:text-green-300">
          참여인원순
        </p>
      </div>
    </div>
  );
};

export default GameRoomCommmand;
