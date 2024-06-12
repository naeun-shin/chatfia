import { instanceWithToken } from "./axios";
import { OrderRequest, RoomResponse } from "@/types/interfaces/lobbyInterface";

export const lobbyApi = {
  // 등록일순 조회
  getRoomByDate: async (params: OrderRequest): Promise<RoomResponse[]> => {
    const response = await instanceWithToken.get("/room/sorted-by-date?order", {
      params,
    });
    return response.data;
  },

  // 참여인원순 조회
  getRoomsByPlayerCount: async (
    params: OrderRequest,
  ): Promise<RoomResponse[]> => {
    const response = await instanceWithToken.get(
      "/room/sorted-by-players?order",
      { params },
    );
    return response.data;
  },
};
