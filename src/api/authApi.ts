import { instance } from "./axios";
import {
  SignUpType,
  SignUpResponse,
  LoginType,
} from "@/types/interfaces/authInterface";

export const api = {
  /* 회원가입 */
  signup: async (signUpUserData: SignUpType): Promise<SignUpResponse> => {
    const response = await instance.post<SignUpResponse>(
      "/api/auth/signup",
      signUpUserData
    );
    return response.data;
  },

  /* 로그인 */
  login: async (loginUserData: LoginType) => {
    const response = await instance.post("/api/auth/login", loginUserData);
    return response.data;
  },
};
