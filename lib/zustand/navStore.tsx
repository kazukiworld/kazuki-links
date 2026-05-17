import { create } from "zustand";

export type SectionId =
  | "works"
  | "experience"
  | "introduction"
  | "contact";

type NavStore = {
  activeSection: SectionId | null;
  setActiveSection: (section: SectionId | null) => void;
};

export const useNavStore = create<NavStore>((set) => ({
  activeSection: null,
  setActiveSection: (activeSection) => set({ activeSection }),
}));
