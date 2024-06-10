import { instance } from "./axios";
import {
  SignUpType,
  SignUpResponse,
  LoginType,
  VerifyEmailType,
  VerifyCodeType,
} from "@/types/interfaces/authInterface";

export const authApi = {
  // 회원가입
  signup: async (signUpUserData: SignUpType): Promise<SignUpResponse> => {
    const response = await instance.post<SignUpResponse>(
      "/auth/signup",
      signUpUserData,
    );
    return response.data;
  },

  // 로그인
  login: async (loginUserData: LoginType) => {
    const response = await instance.post("/auth/login", loginUserData);
    return response.data;
  },

  // 이메일 인증
  verifyEmail: async (emailData: VerifyEmailType) => {
    const response = await instance.post("/mail", emailData);
    return response.data;
  },

  // 인증번호 확인
  verifyCode: async (verifyCodeData: VerifyCodeType) => {
    const response = await instance.get("/mail", { params: verifyCodeData });
    return response.data;
  },
};
