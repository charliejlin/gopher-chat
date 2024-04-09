"use client"
import { connect, sendMsg } from "./lib/webSocket/ws";
import { useState, useEffect, useMemo } from "react"; 
import Header from "./components/Header";
import ChatHistory from "./components/Chat/ChatHistory";
import ChatInput from "./components/Chat/ChatInput";

export default function Home() {
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    connect((newMessage: any) => {
      console.log("New Message");
      setChatHistory(prevChatHistory => [...prevChatHistory, newMessage]);
    });
  }, []); 

  const handleSendMessage = () => {
    sendMsg(inputValue);
    setInputValue(""); 
  };

  return (
    <main className="">
      <Header />
      <ChatHistory messages={[...chatHistory]} />
      <ChatInput setInputValue={setInputValue} inputValue={inputValue} />
      <button onClick={handleSendMessage}>Send</button> 
    </main>
  );
}
