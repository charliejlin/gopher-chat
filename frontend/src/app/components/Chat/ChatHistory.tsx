import Message from "./Message"

export default function ChatHistory({ messages } : {messages : any[]}) {
    
    const messageList = messages.map((message : any, index : any) => {
            const messageData = JSON.parse(message.data)
            return <Message message={messageData.body} key={index}/>
        }
    )


    return (
        <div>
            <h2>What the Gophers say</h2>
            {messageList}
        </div>
    )
}