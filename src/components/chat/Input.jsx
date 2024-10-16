import React, { useState } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import useOllamaStore from "../../hooks/useOllamaStore";
import useChatStore from "../../hooks/useChatStore";

const Input = () => {
  const ollama = useOllamaStore((state) => state.ollama);
  const setAIMessage = useChatStore((state) => state.setAIMessage);
  const [message, setMessage] = useState("");

  const getResponse = async () => {
    if (message.trim() == "") {
      return;
    }

    const response = await ollama.chat({
      model: "llama2",
      messages: [
        {
          role: "user",
          content: message.trim(),
        },
      ],
      stream: true,
    });

    let responseMessage = "";
    for await (const part of response) {
      responseMessage += part.message.content;
      setAIMessage(responseMessage);
    }
    console.log(responseMessage);
  };

  return (
    <div className="w-full px-2 relative">
      <textarea
        value={message}
        rows={2}
        maxLength={600}
        className="bg-[#393939] pl-3 pr-9 py-2 w-full rounded-lg text-gray-300 focus:outline-none"
        type="text"
        required
        placeholder="Enter text here"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-5"
        onClick={getResponse}
      >
        <PaperPlaneIcon className="text-[#EEEEF0] w-[20px] h-[20px]" />
      </button>
    </div>
  );
};

export default Input;
