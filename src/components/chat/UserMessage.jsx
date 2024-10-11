const UserMessage = ({ message }) => {
  return (
    <li className="bg-gray-700/70 p-4 rounded-xl max-w-2xl ml-auto mr-2">
      <span>{message}</span>
    </li>
  );
};

export default UserMessage;
