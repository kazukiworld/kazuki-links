import { create } from 'zustand';

export const useModelStore = create<ModelStore>((set) => ({
    animate: false,
    modelLoading: true,
    setAnimate: (animate: boolean) => set({ animate: animate }),
    setModelLoading: (newLoading: boolean) => set({ modelLoading: newLoading }),
}));

type ModelStore = {
    animate: boolean;
    modelLoading: boolean;
    setAnimate: (animate: boolean) => void;
    setModelLoading: (newLoading: boolean) => void;
};
