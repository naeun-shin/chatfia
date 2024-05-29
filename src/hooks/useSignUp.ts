import { useMutation } from "@tanstack/react-query";
import { api } from "@/api/authApi";
import { SignUpResponse } from "@/types/interfaces/authInterface";

// 회원가입 프로세스를 처리하기 위한 사용자 정의 훅
export const useSignUp = () => {
  // useMutation 훅을 사용하여 비동기 데이터 변경 작업을 설정
  return useMutation({
    // mutationFn: 비동기 요청을 수행할 함수를 지정. 여기서는 api 객체의 signup 함수를 사용함
    mutationFn: api.signup,

    // onSuccess: 이 콜백 함수는 api.signup 함수 호출이 성공적으로 완료되었을 때 실행됨
    // 데이터 처리가 성공적으로 완료되면, 응답 데이터를 콘솔에 출력함
    onSuccess: (data: SignUpResponse) => {
      console.log(data);
    },

    // onError: 이 콜백 함수는 api.signup 함수 호출이 실패했을 때 실행됨
    // 에러가 발생하면, 에러 객체를 콘솔에 출력함
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
