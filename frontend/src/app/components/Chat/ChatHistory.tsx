import Message from "./Message"

export default function ChatHistory({ messages } : {messages : string[]}) {
    
    const messageList = messages.map((message : any, index : Number) => {
        const messageData = JSON.parse(message.data)
        return <Message message={messageData.body} key={index}/>
    })

    return (
        <div>
            <h2 className="font-headings">What the Gophers say</h2>
            <div className="flex flex-col items-center justify-center bg-bg-chat-blue border-[1px] rounded-lg border-white overflow-auto max-w-3xl">
                {messageList}
            </div>
        </div>
    )
}