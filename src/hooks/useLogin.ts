import { authApi } from "@/api/authApi";
import { commonApi } from "@/api/commonApi";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useUserStore from "@/stores/useUserStore";

// 로그인 프로세스를 처리하기 위한 사용자 정의 훅
export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const login = useUserStore((state: any) => state.login);

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async () => {
      try {
        // 사용자 정보를 가져오는 쿼리
        const data = await queryClient.fetchQuery({
          queryKey: ["getuserInfo"], // queryKey : 캐싱 또는 stale타임을 적용하기 위한 함수 이름
          queryFn: commonApi.getUserInfo, // queryFn : 실제 API 호출하는 함수 이름
        });

        login(data);
        router.push("/");
      } catch (error) {
        console.error("사용자 정보 조회 API 호출 중 에러 발생 : ", error);
      }
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생 : ", error);
    },
  });
};
