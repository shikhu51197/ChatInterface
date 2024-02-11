import { UserAuth } from "../context/AuthContext.jsx";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();

  console.log(message);
  return (
    <div className="cover bg-white">
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar ">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
