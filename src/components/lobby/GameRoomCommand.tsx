import React, { useState } from "react";
import { Search } from "lucide-react";
import { GameRoomCommandProps } from "@/types/interfaces/lobbyInterface";
import { lobbyApi, RoomResponse } from "@/api/lobbyApi";

const GameRoomCommmand: React.FC<GameRoomCommandProps> = ({
  searchInput,
  handleSearchInputChange,
}) => {
  const [rooms, setRooms] = useState<RoomResponse[]>([]);

  const handleSortByDate = async () => {
    const response = await lobbyApi.getRoomByDate({ order: "desc" });
    if (Array.isArray(response)) {
      setRooms(response);
    } else {
      // Handle single object response (RoomResponse)
      setRooms([response]);
    }
  };

  const handleSortByPlayerCount = async () => {
    const response = await lobbyApi.getRoomsByPlayerCount({ order: "desc" });
    if (Array.isArray(response)) {
      setRooms(response);
    } else {
      // Handle single object response (RoomResponse)
      setRooms([response]);
    }
  };

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
        <p
          onClick={handleSortByDate}
          className="cursor-pointer duration-300 hover:text-green-300"
        >
          등록일순
        </p>
        <p
          onClick={handleSortByPlayerCount}
          className="cursor-pointer duration-300 hover:text-green-300"
        >
          참여인원순
        </p>
      </div>
    </div>
  );
};

export default GameRoomCommmand;
