// 닉네임 변경 입력 타입
export interface ChangeNicknameType {
  nickname: string;
}

// 비밀번호 변경 입력 타입
export interface ChangePasswordType {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

// 회원탈퇴 입력 타입
export interface DeleteUserInfoType {
  password: string;
}
