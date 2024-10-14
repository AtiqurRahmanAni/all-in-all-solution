const UserMessage = ({ message }) => {
  return (
    <li className="bg-[#393939] p-4 rounded-xl max-w-2xl ml-auto mr-2">
      <span>{message}</span>
    </li>
  );
};

export default UserMessage;
