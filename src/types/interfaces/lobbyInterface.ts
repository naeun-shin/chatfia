import { ChangeEvent } from "react";

// lobby 페이지 props 타입
export interface GameRoomProps {
  image: "red" | "black";
  title: string;
  players: number;
  private: boolean;
  password?: string;
  registrationDate?: Date;
}

export interface GameRoomDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCreateRoom: (
    roomTitle: string,
    isPrivate: boolean,
    password: string,
  ) => void;
}

export interface GameRoomCommandProps {
  searchInput: string;
  handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// 등록일순, 참여인원순 조회 요청 타입
export interface OrderRequest {
  order: "asc" | "desc";
}

// 등록일순, 참여인원순 조회 응답 타입
export interface PlayerResponse {
  id: number;
  nickname: string;
}

export interface RoomResponse {
  id: number;
  name: string;
  hostId: number;
  isPrivate: boolean;
  players: PlayerResponse[];
}
