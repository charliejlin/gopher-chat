export default function ChatHistory({ messages } : {messages : any[]}) {
    console.log(typeof messages)
    return (
        <div>
            <h2>What the Gophers say</h2>
            {messages.map((message : any, index : any) => {
                return <p key={index}>{message.data}</p>
            })}
        </div>
    )
}