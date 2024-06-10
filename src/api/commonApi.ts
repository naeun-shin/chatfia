import { instanceWithToken } from "./axios";
import { UserInfoResponse } from "@/types/interfaces/commonInterface";

export const commonApi = {
  // 회원정보 조회
  getUserInfo: async (): Promise<UserInfoResponse> => {
    const response =
      await instanceWithToken.get<UserInfoResponse>("/auth/info");
    return response.data;
  },
};
