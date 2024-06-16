import { instanceWithToken } from "./axios";
import {
  StartGameResponse,
  ErrorResponse,
  NextPhaseResponse,
  PoliceTurnRequest,
  MafiaTurnRequest,
  DoctorTurnRequest,
} from "@/types/interfaces/gameInterface";

export const gameApi = {
  // 방에서 게임 시작
  startGame: async (
    roomId: string,
  ): Promise<StartGameResponse | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(`/game/start/${roomId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("게임 시작에 실패했습니다.");
    }
  },

  // 다음 페이즈로 진행
  nextPhase: async (
    gameId: number,
  ): Promise<NextPhaseResponse | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(
        `/game/${gameId}/next-phase`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("다음 페이즈로 진행에 실패했습니다.");
    }
  },

  // 경찰 턴 진행
  policeTurn: async (
    policeTurnData: PoliceTurnRequest,
  ): Promise<void | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(
        `/game/${policeTurnData.gameId}/police-turn?${policeTurnData.suspectId}`,
        policeTurnData,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("경찰 턴 진행에 실패했습니다.");
    }
  },

  // 마피아 턴 진행
  mafiaTrun: async (
    mafiaTurnData: MafiaTurnRequest,
  ): Promise<void | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(
        `/game/${mafiaTurnData.gameId}/mafia-turn?${mafiaTurnData.targetId}`,
        mafiaTurnData,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("마피아 턴 진행에 실패했습니다.");
    }
  },

  // 의사 턴 진행
  doctorTrun: async (
    doctorTurnData: DoctorTurnRequest,
  ): Promise<void | ErrorResponse> => {
    try {
      const response = await instanceWithToken.post(
        `/game/${doctorTurnData.gameId}/doctor-turn?${doctorTurnData.targetId}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("의사 턴 진행에 실패했습니다.");
    }
  },

  // 투표 진행
  // 투표 결과 조회
};
