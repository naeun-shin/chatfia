import { instance, instanceWithToken } from "./axios";
import { UserInfoResponse } from "@/types/interfaces/commonInterface";
import {
  ChangeNicknameRequest,
  ChangePasswordRequest,
  DeleteUserInfoRequest,
} from "../types/interfaces/mypageInterface";

export const mypageApi = {
  // 닉네임 변경
  changeNickname: async (
    changeNicknameData: ChangeNicknameRequest,
  ): Promise<UserInfoResponse> => {
    const response = await instance.patch<UserInfoResponse>(
      "/auth/info/nickname",
      changeNicknameData,
    );
    return response.data;
  },

  // 비밀번호 번경
  changePassword: async (
    changePasswordData: ChangePasswordRequest,
  ): Promise<string> => {
    const response = await instanceWithToken.patch<string>(
      "/auth/info/password",
      changePasswordData,
    );
    return response.data;
  },

  // 회원탈퇴
  deleteUserInfo: async (
    deleteUserInfoData: DeleteUserInfoRequest,
  ): Promise<string> => {
    const response = await instanceWithToken.delete<string>("/auth/info", {
      params: deleteUserInfoData,
    });
    return response.data;
  },
};
