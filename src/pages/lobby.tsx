import React, { useState } from "react";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import GameRoom from "@/components/lobby/GameRoom";
import { GameRoomProps } from "@/types/interfaces/lobbyInterface";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Lobby() {
  const [rooms, setRooms] = useState<GameRoomProps[]>([]);
  const [roomTitle, setRoomTitle] = useState("아무나 오세요~");
  const [isOpen, setIsOpen] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState("");

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    const newRoom: GameRoomProps = {
      image: "red",
      title: roomTitle,
      players: 1,
      private: isPrivate,
      password: isPrivate ? password : "",
    };
    setRooms((prevRooms) => [...prevRooms, newRoom]);
    setRoomTitle("아무나 오세요~");
    setIsOpen(false);
    setIsPrivate(false);
    setPassword("");
  };

  return (
    <>
      <Header />
      <div className="my-40 flex flex-col text-center">
        <p className="text-4xl font-bold">게임로비</p>
        <p className="mb-4 font-bold">Start your Chatfia game now</p>
        <div className="flex justify-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">방 만들기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>방 만들기</DialogTitle>
                <div className="flex items-center justify-between">
                  <DialogDescription>방 제목을 입력하세요</DialogDescription>
                  <div className="text--primary-foreground flex items-center justify-between space-x-2 text-sm">
                    <p>비공개 설정</p>
                    <Switch
                      checked={isPrivate}
                      onCheckedChange={(checked) => setIsPrivate(checked)}
                    />
                  </div>
                </div>
              </DialogHeader>
              <form
                onSubmit={handleCreateRoom}
                className="flex w-full items-center space-x-2"
              >
                <Input
                  type="text"
                  value={roomTitle}
                  onChange={(e) => setRoomTitle(e.target.value)}
                  className="w-full border p-2 text-black"
                />
                <Button type="submit">확인</Button>
              </form>
              {isPrivate && (
                <div className="mt-4 grid w-full items-center gap-1.5">
                  <Label htmlFor="비공개 방 비밀번호">비공개 방 비밀번호</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 text-black"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
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
