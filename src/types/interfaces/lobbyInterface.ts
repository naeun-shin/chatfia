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

// 방 생성 요청 타입
export interface RoomRequest {
  name: string;
  isPrivate: boolean;
  password: string;
}

// 등록일순, 참여인원순 조회 요청 타입
export interface OrderRequest {
  order: "asc" | "desc";
}

// 방 생성, 등록일순, 참여인원순 조회 성공 응답 타입
export interface Player {
  id: number;
  nickname: string;
}

export interface RoomResponseSuccess {
  id: number;
  name: string;
  hostId: number;
  isPrivate: boolean;
  players: Player[];
}

// 방 생성, 등록일순, 참여인원순 조회 실패 응답 타입
export interface RoomResponseFail {
  status: "error";
  message: string;
}
