import { instanceWithToken } from "./axios";
import { RoomResponse } from "@/types/interfaces/lobbyInterface";

export const roomApi = {
  // 방 삭제
  deleteRoom: async (roomId: string): Promise<RoomResponse> => {
    try {
      const response = await instanceWithToken.delete(`/room/${roomId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { status: "error", message: "방 삭제에 실패했습니다." };
    }
  },

  // 방에서 유저 퇴장
  leaveRoom: async (roomId: string): Promise<RoomResponse> => {
    try {
      const response = await instanceWithToken.delete(`/room/${roomId}/leave`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { status: "error", message: "방 퇴장에 실패했습니다." };
    }
  },

  // 유저 강제 퇴장
  kickUser: async (roomId: string): Promise<RoomResponse> => {
    try {
      const response = await instanceWithToken.delete(`/room/${roomId}/kick`);
      return response.data;
    } catch (error) {
      console.error(error);
      return { status: "error", message: "유저 강제 퇴장에 실패했습니다." };
    }
  },

  // 방 정보 수정
};
