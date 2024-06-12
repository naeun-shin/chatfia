import { instance } from "./axios";
import {
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  VerifyEmailRequest,
  VerifyCodeRequest,
} from "@/types/interfaces/authInterface";

export const authApi = {
  // 회원가입
  signup: async (signUpUserData: SignUpRequest): Promise<SignUpResponse> => {
    const response = await instance.post<SignUpResponse>(
      "/auth/signup",
      signUpUserData,
    );
    return response.data;
  },

  // 로그인
  login: async (loginUserData: LoginRequest) => {
    const response = await instance.post("/auth/login", loginUserData);
    return response.data;
  },

  // 이메일 인증
  verifyEmail: async (emailData: VerifyEmailRequest) => {
    const response = await instance.post("/mail", emailData);
    return response.data;
  },

  // 인증번호 확인
  verifyCode: async (verifyCodeData: VerifyCodeRequest) => {
    const response = await instance.get("/mail", { params: verifyCodeData });
    return response.data;
  },
};
