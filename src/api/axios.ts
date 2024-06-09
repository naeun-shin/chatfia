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
    const { response } = error;

    if (response) {
      const { status, data } = response;
      let errorMessage = "오류가 발생했습니다";

      if (data && data.message) {
        errorMessage = data.message;
      } else if (data && data.error) {
        errorMessage = `${data.error} (상태 코드: ${status})`;
      } else {
        errorMessage = `상태 코드 ${status}`;
      }

      // 4xx 에러
      if (status >= 400 && status < 500) {
        alert(`클라이언트 오류: ${errorMessage}`);
      }
      // 5xx 에러
      else if (status >= 500) {
        alert(`서버 오류: ${errorMessage}`);
      } else {
        alert(errorMessage);
      }
    } else {
      alert("네트워크 오류가 발생했습니다");
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
      config.headers.Authorization = token; // 필요할 경우 `Bearer ${token}`
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
