import { GetUserInfoResponse } from "@/types/interfaces/commonInterface";
import { instanceWithToken } from "./axios";

export const commonApi = {
  // 회원정보 조회
  getUserInfo: async (): Promise<GetUserInfoResponse> => {
    const response =
      await instanceWithToken.get<GetUserInfoResponse>("/auth/info");
    return response.data;
  },

  // 회원탈퇴
  deleteUserInfo: async () => {
    const response = await instanceWithToken.delete("/auth/info");
    return response.data;
  },
};
