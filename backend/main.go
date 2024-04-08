package main

import (
	"fmt"
	"log"
	"net/http"
)


func serveWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	ws, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		log.Println(err)
	}

	reader(ws)
}

func setUpRoutes() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Simple Server")
	})

	http.HandleFunc("/ws", serveWs)
}

func main() {
	setUpRoutes()
	http.ListenAndServe(":8000", nil)
}
