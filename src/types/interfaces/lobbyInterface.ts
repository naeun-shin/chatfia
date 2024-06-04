/* lobby 페이지 props 타입 */
export interface GameRoomProps {
  image: "red" | "black";
  title: string;
  players: number;
  private: boolean;
  password?: string;
}