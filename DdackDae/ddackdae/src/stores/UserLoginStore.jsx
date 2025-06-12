import { create } from "zustand";

const useUserLoginStore = create((set) => ({
  isLoggedIn: !!localStorage.getItem("localToken"),
  token: localStorage.getItem("localToken") || "",
  setLogin: (token) =>
    set(() => ({
      isLoggedIn: true,
      token: token,
    })),
    logout: () =>
      set(() => {
        localStorage.removeItem("localToken");
        return {
          isLoggedIn: false,
          token: "",
        };
      }),
}));

export default useUserLoginStore;


