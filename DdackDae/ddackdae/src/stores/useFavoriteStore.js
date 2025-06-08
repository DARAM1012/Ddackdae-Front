import { create } from "zustand";

const useFavoriteStore = create((set) => ({
  favoritesList: [],
  setFavoritesList: (data) => set({ favoritesList: data }),
  setFavoritesListDelete: () => set({ favoritesList: [] }),
}));

export default useFavoriteStore;
