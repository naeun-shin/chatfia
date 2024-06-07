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

/*
    useMutaion : post, delete, put, patch 
     - mutationFn : api에서 불러올 함수를 작성하는 함수
     - onSuccess : 성공시 실행할 함수
     - onError : 실패시 실행할 함수


    useQuery  : get
    - queryKey : ['', params] '' : query에서 해당 데이터에 대한 캐싱 적용을 위한 키 이름(고유 값)
                params  : api로 전달해줄 데이터
    - queryFn : api에서 불러올 함수를 작성하는 함수
        만일, params가 있다면 () => 함수명(params)
    예시 )
    export const usePlanDetailQuery = (planId: number) => {
    return useQuery({
        queryKey: ['planDetail', planId],
        queryFn: () => getPlanDetail(planId),
        // staleTime: 5 * 60 * 1000, // 데이터를 5분간 신선하게 유지
        // gcTime: 30 * 60 * 1000, // 캐시에서 데이터를 30분간 유지 => gcTime으로 수정 필요 => v5에서 변경 됨
        // refetchInterval: 360000, // 투표 마감 결과 확인을 위해 1분으로 적용
        // refetchOnWindowFocus: false, // 윈도우 포커스 시 데이터 재요청 안 함
        // refetchOnReconnect: false, // 네트워크 재연결 시 데이터 재요청 안 함
    });
    };
*/
