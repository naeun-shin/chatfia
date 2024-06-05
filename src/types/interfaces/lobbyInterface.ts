/* lobby 페이지 props 타입 */
export interface GameRoomProps {
  image: "red" | "black";
  title: string;
  players: number;
  private: boolean;
  password?: string;
}

export interface GameRoomDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCreateRoom: (
    roomTitle: string,
    isPrivate: boolean,
    password: string,
  ) => void;
}
