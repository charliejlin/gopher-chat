"use client"
import { connect, sendMsg } from "./lib/webSocket/ws";
import { useState } from "react";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

export default function Home() {
  const [counter, setCounter] = useState(0)
  const [chatHistory, setChatHistory] = useState<any[]>([])

  connect((newMessage : any) => {
    console.log("New Message");
    setChatHistory([...chatHistory, newMessage])
    console.log(chatHistory)
  })

  return (
    <main className="">
      <Header />
      <ChatHistory messages={[...chatHistory]} />
        <button onClick={() => {
          setCounter(counter + 1)
          sendMsg(`websocket: ${counter}`)
        }}>HALLO</button>
    </main>
  );
}
