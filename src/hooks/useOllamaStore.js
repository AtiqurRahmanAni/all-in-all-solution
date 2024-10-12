import { create } from "zustand";

const useOllamaStore = create((set) => ({
  ollama: null,
  setOllama: (ollama) => set({ ollama: ollama }),
}));

export default useOllamaStore;
