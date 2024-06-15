import { instanceWithToken } from "./axios";
import {
  RoomRequest,
  OrderRequest,
  RoomResponseSuccess,
  RoomResponseFail,
} from "@/types/interfaces/lobbyInterface";

export type RoomResponse = RoomResponseSuccess | RoomResponseFail;

export const lobbyApi = {
  // 방 생성
  createRoom: async (data: RoomRequest): Promise<RoomResponse> => {
    try {
      const response = await instanceWithToken.post("/room", data);
      return response.data;
    } catch (error) {
      console.error(error);
      return { status: "error", message: "방 생성에 실패했습니다." };
    }
  },

  // 모든 방 조회
  getAllRooms: async (): Promise<RoomResponse[]> => {
    try {
      const response = await instanceWithToken.get("/room");
      return response.data;
    } catch (error) {
      console.error(error);
      return [{ status: "error", message: "방 조회에 실패했습니다." }];
    }
  },

  // 등록일순 조회
  getRoomByDate: async (
    params: OrderRequest,
  ): Promise<RoomResponse[] | RoomResponse> => {
    try {
      const response = await instanceWithToken.get(
        "/room/sorted-by-date?order",
        { params },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return { status: "error", message: "등록일순 조회에 실패했습니다." };
    }
  },

  // 참여인원순 조회
  getRoomsByPlayerCount: async (
    params: OrderRequest,
  ): Promise<RoomResponse[] | RoomResponse> => {
    try {
      const response = await instanceWithToken.get(
        "/room/sorted-by-players?order",
        { params },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return { status: "error", message: "참여인원순 조회에 실패했습니다." };
    }
  },
};
