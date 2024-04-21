import { sendMsg } from "@/app/lib/webSocket/ws";

interface InputProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

export default function ChatInput({ setInputValue, inputValue } : InputProps) {
  const handleSendMessage = () => {
    sendMsg(inputValue);
    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}
