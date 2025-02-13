import { create } from "zustand";

type State = {
  session: User | null;
};

type Action = {
  setSession: (session: State["session"]) => void;
};

const useMessengerStore = create<State & Action>((set) => ({
  session: null,
  setSession: (session: State["session"]) => set({ session }),
}));

export default useMessengerStore;
