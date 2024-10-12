import React from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import useOllamaStore from "../../hooks/useOllamaStore";
import useChatStore from "../../hooks/useChatStore";

const Input = () => {
  const ollama = useOllamaStore((state) => state.ollama);
  const setAIMessage = useChatStore((state) => state.setAIMessage);

  const getResponse = async () => {
    console.log("Here", ollama);
    const message = {
      role: "user",
      content: "Is indie game dev is challenging?",
    };
    const response = await ollama.chat({
      model: "llama2",
      messages: [message],
      stream: true,
    });

    let responseMessage = "";
    for await (const part of response) {
      responseMessage += part.message.content;
      setAIMessage(responseMessage);
    }
  };

  return (
    <div className="w-full px-2 relative">
      <textarea
        rows={2}
        maxLength={600}
        className="bg-[#393939] pl-3 pr-9 py-2 w-full rounded-lg text-gray-300 focus:outline-none"
        type="text"
        required
        placeholder="Enter text here"
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
