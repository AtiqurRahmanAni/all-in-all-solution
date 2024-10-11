import React from "react";
import UserMessage from "./UserMessage";
import AIMessage from "./AIMessage";

const ChatList = () => {
  const message =
    "If the website uses CAPTCHAs, use services like 2Captcha or Anti-Captcha to bypass it programmatically.";
  return (
    <div className="flex-1">
      <ul className="w-full pt-4 space-y-2 max-h-[90dvh] overflow-y-scroll scrollbar-custom">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) =>
          item % 2 == 0 ? (
            <UserMessage key={item} message={message} />
          ) : (
            <AIMessage />
          )
        )}
      </ul>
    </div>
  );
};

export default ChatList;
