import { create } from "zustand";

type State = {
	index: number;
};

type Action = {
	setIndex: (index: State["index"]) => void;
}

const useDeepIndexStore = create<State & Action>((set) => ({
	index: 999,
	setIndex: (index: number) => set({ index }),
}));

export default useDeepIndexStore;