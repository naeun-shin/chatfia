// 닉네임 변경 입력 타입
export interface ChangeNicknameRequest {
  nickname: string;
}

// 비밀번호 변경 입력 타입
export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

// 회원탈퇴 입력 타입
export interface DeleteUserInfoRequest {
  password: string;
}
