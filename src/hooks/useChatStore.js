import { create } from "zustand";

const useChatStore = create((set) => ({
  aiMessage: "",
  messages: [],
  setAIMessage: (message) => set({ aiMessage: message }),
}));

export default useChatStore;
