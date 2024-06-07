import axios from "axios";
import { setCookie } from "@/hooks/useCookie";
import { getStorage, setStorage } from "@/hooks/useStorage";

// 토큰이 없는 경우의 instance => 로그인 및 회원가입 API 연결 시도 때 사용하는 instance
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    const accessToken = response.headers.accesstoken;
    const refreshToken = response.headers.refreshtoken;

    if (accessToken && refreshToken) {
      setStorage("accessToken", accessToken);
      setCookie("refreshToken", refreshToken);
    }

    return response;
  },
  (error) => {
    if (400 <= error.response.status) {
      // 에러 코드 메세지 반환
      if (
        error.response.data.message === undefined ||
        error.response.data.message === null
      ) {
        alert(
          "에러 발생 : " +
            error.response.data.error +
            " : " +
            error.response.data.status,
        );
      } else {
        alert(error.response.data.message);
      }
    }
    return Promise.reject(error);
  },
);

// 토큰이 있는 경우의 instance => 로그인 후에 사용하는 instance
export const instanceWithToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터를 사용하여 Authorization 헤더 설정
instanceWithToken.interceptors.request.use(
  (config) => {
    const token = getStorage("accessToken");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
