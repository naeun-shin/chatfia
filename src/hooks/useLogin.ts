import { authApi } from "@/api/authApi";
import { commonApi } from "@/api/commonApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useUserStore from "@/stores/useUserStore";

// 로그인 프로세스를 처리하기 위한 사용자 정의 훅
export const useLogin = () => {
  const queryClient = useQueryClient();
  const login = useUserStore((state: any) => state.login);

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async () => {
      try {
        console.log("try 구문 확인");
        // 사용자 정보를 가져오는 쿼리
        const data = await queryClient.fetchQuery({
          queryKey: ["getuserInfo"],
          queryFn: commonApi.getUserInfo,
        });
        login(data);
      } catch (error) {
        console.error("사용자 정보 조회 API 호출 중 에러 발생 : ", error);
      }
    },
    onError: (error) => {
      console.error("로그인 API 호출 중 에러 발생 : ", error);
    },
  });
};
