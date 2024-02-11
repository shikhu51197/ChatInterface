import Message from "./Message.jsx";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";

const ChatBox = () => {
  const messagesEndRef = useRef();
  const [messages, setMassages] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        // console.log(doc.data);
      });
      setMassages(messages);
      // console.log(messages);
    });

    return () => unsubscribe;
  }, []);

  // const messages1 = [
  //   {
  //     id: 1,
  //     avatar:
  //       "https://tse1.mm.bing.net/th?id=OIP._0nj-VCGpTVBUPZYf0UHYAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120",
  //     name: "Rekha",
  //     text: "HI how are you ?",
  //   },
  //   {
  //     id: 2,
  //     avatar:
  //       "https://tse1.mm.bing.net/th?id=OIP._0nj-VCGpTVBUPZYf0UHYAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120",
  //     name: "meena",
  //     text: "hello there",
  //   },
  // ];

  return (
    <div className="pb-44 pt-20 containerWrap bg-white">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
