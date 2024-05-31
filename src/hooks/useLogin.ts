import { api } from "@/api/authApi";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

// 로그인 프로세스를 처리하기 위한 사용자 정의 훅
export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: api.login,
    onSuccess: () => {
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      // error.message
    },
  });
};
