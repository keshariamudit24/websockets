// import wss
import { WebSocketServer } from "ws";

// create wss
const wss = new WebSocketServer({ port: 3000 })

// EVENT HANDLER: whenever a connection is made, trigger this function with a socket 
// comparing it with express to make it look easier : 
//          app.post('/todos', (req, res) => {
//                              POST LOGIC
//          })
// here, if a req is being made on /todos route, we perfom the corresponding function for post logic having req, res as params...
// similarly, in ws we don't have any routes & req, res... instead there's just "connection" and socket 

// CODE - 1 (BASIC UNDERSTANDING)

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

