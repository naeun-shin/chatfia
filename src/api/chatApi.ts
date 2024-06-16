import { instanceWithToken } from "./axios";
import {
  ChatMessage,
  ChatResponse,
  JoinMessage,
  JoinResponse,
  LeaveMessage,
  LeaveResponse,
  ErrorResponse,
} from "@/types/interfaces/chatInterface";

export const chatApi = {
  // 메세지 전송(채팅)
  sendMessage: async (
    message: ChatMessage,
  ): Promise<ChatResponse | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(
        "/app/chat.sendMessage",
        message,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("채팅 메세지 전송에 실패했습니다.");
    }
  },

  // 메세지 전송(유저참여)
  addUser: async (
    message: JoinMessage,
  ): Promise<JoinResponse | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(
        "/app/chat.addUser",
        message,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("유저참여 메세지 전송에 실패했습니다.");
    }
  },

  // 메세지 전송(유저떠남)
  leaveUser: async (
    message: LeaveMessage,
  ): Promise<LeaveResponse | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(
        "/app/chat.leaveUser",
        message,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("유저떠남 메세지 전송에 실패했습니다.");
    }
  },
};
