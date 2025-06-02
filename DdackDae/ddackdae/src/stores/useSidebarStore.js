// src/stores/useSidebarStore.js
import { create } from "zustand";

const useSidebarStore = create((set) => ({
  isOpen:       false,       // 사이드바 열림/닫힘 상태
  selectedKey:  "default",   // 현재 열려 있는 탭 ("default", "search", "favorite", "nearby", "details")
  nearbyParams: null,        // 클러스터 클릭 시 넘긴 { lat, lot, radius, page, size }

  toggleSidebar: () => set((s) => ({ isOpen: !s.isOpen })),
  openSidebar:   (key, params = null) =>
                   set({ isOpen: true, selectedKey: key, nearbyParams: params }),
  closeSidebar:  () => set({ isOpen: false }),
  setSelectedKey:(key) => set({ selectedKey: key }),
}));

export default useSidebarStore;
