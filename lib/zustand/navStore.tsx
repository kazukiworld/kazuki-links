import { create } from 'zustand';

export const useNavStore = create<NavStore>((set) => ({
    content: {title: '', description: '', image: '', link: ''},
    setContent: (content: Content) => set({ content: content }),
}));

type NavStore = {
    content: Content;
    setContent: (content: Content) => void;
};

type Content = {
    title: string,
    description: string, 
    image: string | null,
    link: string
}
