// 회원가입 시 입력 타입
export interface SignUpRequest {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

// 회원가입 후 응답 타입
export interface SignUpResponse {
  id: number;
  email: string;
  nickname: string;
  password: string;
}

// 로그인 시 입력 타입
export interface LoginRequest {
  email: string;
  password: string;
}

// 이메일 인증 입력 타입
export interface VerifyEmailRequest {
  email: string;
}

// 인증번호 입력 타입
export interface VerifyCodeRequest {
  email: string;
  code: string;
}
