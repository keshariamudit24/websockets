// import wss
import { WebSocketServer } from "ws";

// create wss
const wss = new WebSocketServer({ port: 3000 })

wss.on("connection", function(socket){

    console.log("user connected")
    setInterval(() => {
        // send msg from server to client 
        socket.send("Current price of SOL is : " + Math.random())
    }, 500)

    // if the client is sending some msg 
    socket.on("message", (e) => {
        console.log(e.toString());
    })

})

