import { authApi } from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { SignUpResponse } from "@/types/interfaces/authInterface";

// 회원가입 프로세스를 처리하기 위한 사용자 정의 훅
export const useSignUp = () => {
  return useMutation({
    mutationFn: authApi.signup,
    onSuccess: (data: SignUpResponse) => {
      console.log(data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};
