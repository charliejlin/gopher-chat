const socket = new WebSocket("ws://localhost:8000/ws");

const connect = (callBack : any) => {
    console.log("Attempt Connection...");
    
    socket.onopen = () => {
        console.log("Connected!");
    }

    socket.onmessage = (msg) => {
        console.log(msg);
        callBack(msg)
    }

    socket.onclose = (event) => {
        console.log("Closed:", event);
    } 

    socket.onerror = (error) => {
        console.log("Error:", error);
    }
}

const sendMsg = (msg : (string | ArrayBufferLike | Blob | ArrayBufferView)) => {
    console.log("Sent Message:", msg);
    socket.send(msg);
}

const disconnect = () => {
    socket.close()
}

export { connect, sendMsg };

