import "./App.css";
import ChatLayout from "./components/chat/ChatLayout";

const App = () => {
  return (
    <main className="text-lg bg-black min-h-screen">
      <div className="container mx-auto">
        <ChatLayout />
      </div>
    </main>
  );
};

export default App;
