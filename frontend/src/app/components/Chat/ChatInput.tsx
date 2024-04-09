interface Props {
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    inputValue: string;
  }

  export default function ChatInput({ setInputValue, inputValue } : Props) {
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input value={inputValue} onChange={handleChange} />
        </div>
    )
}