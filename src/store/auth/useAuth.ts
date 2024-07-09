import { create } from "zustand";

type State = {
  token: string;
  isLogin: boolean;
};

type Action = {
  updateToken: (token: State["token"]) => void;
  updateLogin: (isLogin: State["isLogin"]) => void;
};

export const useAuth = create<State & Action>((set) => ({
  token: "",
  isLogin: false,
  updateToken: (token) =>
    set(() => ({
      token: token,
    })),
  updateLogin: (isLogin) =>
    set(() => ({
      isLogin: isLogin,
    })),
}));
