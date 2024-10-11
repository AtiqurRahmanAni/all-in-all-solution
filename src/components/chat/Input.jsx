import React from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const Input = () => {
  return (
    <div className="w-full px-2 relative">
      <textarea
        rows={2}
        maxLength={600}
        className="bg-gray-700/65 pl-3 pr-9 py-2 w-full rounded-lg text-gray-300 focus:outline-none"
        type="text"
        required
        placeholder="Enter text here"
      />
      <button className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-5">
        <PaperPlaneIcon className="text-[#EEEEF0] w-[20px] h-[20px]" />
      </button>
    </div>
  );
};

export default Input;
