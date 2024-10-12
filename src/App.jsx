import { useEffect } from "react";
import "./App.css";
import ChatLayout from "./components/chat/ChatLayout";
import { Ollama } from "ollama";
import useOllamaStore from "./hooks/useOllamaStore";

const App = () => {
  const setOllama = useOllamaStore((state) => state.setOllama);

  useEffect(() => {
    const newOllama = new Ollama({ host: import.meta.env.VITE_OLLAMA_URL });
    setOllama(newOllama);
  }, []);

  return (
    <main className="text-lg bg-[#212121] min-h-screen">
      <div className="container mx-auto">
        <ChatLayout />
      </div>
    </main>
  );
};

export default App;
