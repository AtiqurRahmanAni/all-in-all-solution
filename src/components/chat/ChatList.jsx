import React, { useEffect, useRef } from "react";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";
import useChatStore from "../../hooks/useChatStore";

const ChatList = () => {
  const bottomRef = useRef(null);
  const aiMessage = useChatStore((state) => state.aiMessage);

  useEffect(() => {
    if (bottomRef?.current) {
      bottomRef.current.scrollIntoView({ behavior: "auto", block: "end" });
    }
  }, [aiMessage]);

  const message =
    "If the website uses CAPTCHAs, use services like 2Captcha or Anti-Captcha to bypass it programmatically.";
  return (
    <div className="flex-1">
      <ul className="w-full pt-4 space-y-2 max-h-[88dvh] overflow-y-scroll scrollbar-custom">
        {[0].map((item) =>
          item % 2 != 0 ? (
            <UserMessage key={item} message={message} />
          ) : (
            <AIMessage key={item} />
          )
        )}
        <div ref={bottomRef}></div>
      </ul>
    </div>
  );
};

export default ChatList;
