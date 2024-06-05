import React, { ChangeEvent, useState } from "react";
import Header from "@/components/header/Header";
import GameRoom from "@/components/lobby/GameRoom";
import { GameRoomProps } from "@/types/interfaces/lobbyInterface";
import GameRoomDialog from "@/components/lobby/GameRoomDialog";
import { Command } from "@/components/ui/command";
import { Search } from "lucide-react";

export default function Lobby() {
  const [rooms, setRooms] = useState<GameRoomProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredRooms = rooms.filter((room) =>
    room.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <>
      <Header />
      <div className="mb-20 mt-40 flex flex-col text-center">
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
      <div className="mx-auto mb-20 w-1/3">
        <Command>
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
        </Command>
      </div>
      <div className="mb-20">
        <div className="mx-auto grid max-w-fit grid-cols-5">
          {filteredRooms.map((room, index) => (
            <div key={index} className="animate-fadeIn flex justify-center">
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
