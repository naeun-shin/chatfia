/* 회원가입 시 입력 타입 */
export interface SignUpType {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

/* 회원가입 후 응답 타입 */
export interface SignUpResponse {
  id: number;
  email: string;
  nickname: string;
  password: string;
}

/* 로그인 시 입력 타입 */
export interface LoginType {
  email: string;
  password: string;
}
