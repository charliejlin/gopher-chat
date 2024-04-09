FROM golang:1.22.2-alpine3.19
RUN apk add --no-cache bash ca-certificates git gcc g++ libc-dev
WORKDIR /app
COPY . .
ENV GO111MODULE=on
RUN go mod download
RUN go build -o realtime-chat-go-react
RUN ls -l
CMD ["/app/realtime-chat-go-react"]
