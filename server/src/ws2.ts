import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", function(socket){

    socket.on("message", function (e){
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })
})