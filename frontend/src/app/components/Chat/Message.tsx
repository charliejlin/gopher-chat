export default function Message(message : any) {
    let userMessage = message.message
    
    return ( 
        <div>
            <p>{userMessage}</p>
        </div>
    )
}