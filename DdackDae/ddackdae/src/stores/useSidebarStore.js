import { create } from "zustand";

// 사이드바 상태와 오픈되었을 때 SideOpen의 body값 설정.
const useSidebarStore = create((set) => ({
  isOpen: false,
  selectedKey: 'default',

  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  openSidebar: (key) => set({ isOpen: true, selectedKey: key }),
  closeSidebar: () => set({ isOpen: false }),
  setSelectedKey: (key) => set({ selectedKey: key }),
}));

export default useSidebarStore;
