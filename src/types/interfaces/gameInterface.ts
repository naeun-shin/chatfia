export interface StartGameResponse {
  id: number;
  roomId: number;
  mafiaIds: number[];
  citizenIds: number[];
  doctorId: number;
  policeId: number;
  state: string;
  deadPlayerIds: number[];
}

export interface NextPhaseResponse {
  id: number;
  roomId: number;
  mafiaIds: number[];
  citizenIds: number[];
  doctorId: number;
  policeId: number;
  state: "DAY" | "NIGHT";
  deadPlayerIds: number[];
}

export interface PoliceTurnRequest {
  gameId: number;
  suspectId: number;
}

export interface MafiaTurnRequest {
  gameId: number;
  targetId: number;
}

export interface DoctorTurnRequest {
  gameId: number;
  targetId: number;
}

export type ErrorResponse = { status: "error"; message: string };
