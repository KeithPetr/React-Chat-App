/* eslint-disable react/prop-types */
import { auth } from "../src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Message({ message }) {
const [user] = useAuthState(auth)

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="chat-bubble-left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble-right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
}
