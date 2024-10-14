import React from "react";
import Input from "./Input";
import ChatList from "./ChatList";

const ChatLayout = () => {
  return (
    <div className="mx-auto min-h-screen flex flex-col text-white max-w-6xl">
      <ChatList />
      <div className="flex justify-center items-center mb-2">
        <Input />
      </div>
    </div>
  );
};

export default ChatLayout;
