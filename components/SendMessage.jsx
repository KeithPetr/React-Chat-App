import { useState } from "react";
import { auth, db } from "../src/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function SendMessage() {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
        alert("Enter a valid message");
        return;
    }
    const { uid, displayName, photoURL } = auth.currentUser
    await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
    });
    setMessage("");
  }
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input"
        placeholder="type message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
