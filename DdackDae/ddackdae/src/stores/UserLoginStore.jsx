import { create } from "zustand";

const useUserLoginStore = create((set) => ({
  isLoggedIn: false,
  token: "",

  initialize: () => {
    const storedToken = localStorage.getItem("localToken");
    if (storedToken) {
      set({ isLoggedIn: true, token: storedToken });
    }
  },

  setLogin: (token) =>
    set(() => ({
      isLoggedIn: true,
      token: token,
    })),

  logout: () =>
    set(() => {
      localStorage.removeItem("localToken");
      localStorage.removeItem("SocialToken");
      return {
        isLoggedIn: false,
        token: "",
      };
    }),
}));

export default useUserLoginStore;
