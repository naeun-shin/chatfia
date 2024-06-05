import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { GameRoomDialogProps } from "@/types/interfaces/lobbyInterface";

const GameRoomDialog: React.FC<GameRoomDialogProps> = ({
  isOpen,
  setIsOpen,
  onCreateRoom,
}) => {
  const [roomTitle, setRoomTitle] = useState("아무나 오세요~");
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState("");

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateRoom(roomTitle, isPrivate, password);
    setRoomTitle("아무나 오세요~");
    setIsOpen(false);
    setIsPrivate(false);
    setPassword("");
  };

  return (
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
              <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
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
  );
};

export default GameRoomDialog;
