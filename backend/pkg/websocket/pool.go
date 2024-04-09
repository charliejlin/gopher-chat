package websocket

import "fmt"

type Pool struct {
	Register chan *Client
	Unregister chan *Client
	Clients map[*Client]bool
	Broadcast chan Message
}

func NewPool() *Pool {
	return &Pool{
		Register: make(chan *Client),
		Unregister: make(chan *Client),
		Clients: make(map[*Client]bool),
		Broadcast: make(chan Message),
	}
}

func (pool *Pool) Start() {
    for {
        select {
        case client := <-pool.Register:
            pool.Clients[client] = true
            client.Conn.WriteJSON(Message{Type: 1, Body: "New User Joined..."})
        case client := <-pool.Unregister:
            delete(pool.Clients, client)
            client.Conn.WriteJSON(Message{Type: 1, Body: "User Disconnected..."})
        case message := <-pool.Broadcast:
            for client := range pool.Clients {
                if err := client.Conn.WriteJSON(message); err != nil {
                    fmt.Println("Error writing JSON message:", err)
                    delete(pool.Clients, client)
                }
            }
        }
    }
}