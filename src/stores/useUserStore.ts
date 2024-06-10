import { create } from "zustand";
import { UserInfoResponse } from "@/types/interfaces/commonInterface";

interface UserState {
  user: UserInfoResponse | null;
  isLoggedIn: boolean;
  login: (userData: UserInfoResponse) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (userData: UserInfoResponse) =>
    set({ user: userData, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

export default useUserStore;
