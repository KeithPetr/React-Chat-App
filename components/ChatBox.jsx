import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../src/firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    
    return () => unsubscribe;
  }, []);

  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}
        <span ref={scroll}></span>
        <SendMessage scroll={scroll} />
      </div>
    </main>
  );
}
