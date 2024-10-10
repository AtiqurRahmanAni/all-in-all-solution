import React from "react";
import Input from "./Input";

const ChatLayout = () => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <div className="flex-1">Messages are here</div>
      <div className="flex justify-center items-center mb-2">
        <Input />
      </div>
    </div>
  );
};

export default ChatLayout;
