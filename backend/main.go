package main

import (
	"fmt"
	"net/http"
	"github.com/charliejlin/gopher-chat/tree/main/backend/pkg/websocket"
)


func serveWs(w http.ResponseWriter, r *http.Request, pool *websocket.Pool) {
	fmt.Println("Websocket Endpoint Hit")

	conn, err := websocket.Upgrade(w,r)

	if err != nil {
		fmt.Println(err)
	}

	client := &websocket.Client {
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()

}

func setUpRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(w, r, pool)
	})
}

func main() {
	setUpRoutes()
	http.ListenAndServe(":8000", nil)
}
