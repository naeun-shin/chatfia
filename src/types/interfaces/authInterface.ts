// 회원가입 및 로그인 시 공통 입력 타입
export interface Credentials {
  email: string;
  password: string;
}

// 회원가입 시 추가 입력 타입
export interface SignUpRequest extends Credentials {
  nickname: string;
  confirmPassword: string;
}

// 회원가입 후 응답 타입
export interface SignUpResponse {
  id: number;
  email: string;
  nickname: string;
  password: string; // 보안상의 이유로 클라이언트에게 반환하지 않으므로 제거하는 것을 고려해보기
}

// 로그인 시 입력 타입
export type LoginRequest = Credentials;

// 이메일 인증 입력 타입
export interface VerifyEmailRequest {
  email: string;
}

// 인증번호 입력 타입
export interface VerifyCodeRequest {
  email: string;
  code: string;
}
