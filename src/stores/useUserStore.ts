import { create } from "zustand";
import { GetUserInfoResponse } from "@/types/interfaces/commonInterface";

interface UserState {
  user: GetUserInfoResponse | null;
  isLoggedIn: boolean;
  login: (userData: GetUserInfoResponse) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (userData: GetUserInfoResponse) =>
    set({ user: userData, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

export default useUserStore;
