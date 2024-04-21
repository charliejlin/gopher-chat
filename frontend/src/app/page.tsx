"use client";
import { connect, disconnect } from "./lib/webSocket/ws";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ChatHistory from "./components/Chat/ChatHistory";
import ChatInput from "./components/Chat/ChatInput";

export default function Home() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    connect((newMessage: string) => {
      setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);
    });
  }, []);

  return (
    <main className="bg-bg-blue h-screen text-white">
      <Header />
      <div>
        <ChatHistory messages={[...chatHistory]} />
        <ChatInput setInputValue={setInputValue} inputValue={inputValue} />
      </div>
    </main>
  );
}
