import axios from "axios";

// token이 없는 경우의 instance => 로그인 및 회원가입 API 연결 시도 때 사용하는 instance
export const instance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: "https://api.chatfia.online",
  headers: {
    "Content-Type": "application/json",
  },
});

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
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
          "불러오기에 에러 발생했습니다 : " +
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

// 헤더에 토큰을 담는 instance
