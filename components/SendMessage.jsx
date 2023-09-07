/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth, db } from "../src/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import ReactLogo from "../images/react-logo.png";

export default function SendMessage({scroll}) {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
        alert("Enter a valid message");
        return;
    }
    const { uid, displayName, photoURL, email } = auth.currentUser
    const avatar = photoURL || ReactLogo
    await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName || email,
        avatar,
        createdAt: serverTimestamp(),
        uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
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
