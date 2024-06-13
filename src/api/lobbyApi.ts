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
      if (error instanceof Error) {
        console.error(error.message);
        return { status: "error", message: error.message };
      } else {
        console.error("알 수 없는 오류 발생: ", error);
        return { status: "error", message: "알 수 없는 오류 발생" };
      }
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
      if (error instanceof Error) {
        console.error(error.message);
        return { status: "error", message: error.message };
      } else {
        console.error("알 수 없는 오류 발생: ", error);
        return { status: "error", message: "알 수 없는 오류 발생" };
      }
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
      if (error instanceof Error) {
        console.error(error.message);
        return { status: "error", message: error.message };
      } else {
        console.error("알 수 없는 오류 발생: ", error);
        return { status: "error", message: "알 수 없는 오류 발생" };
      }
    }
  },
};
