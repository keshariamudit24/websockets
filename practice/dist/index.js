"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import wss
const ws_1 = require("ws");
// create wss
const wss = new ws_1.WebSocketServer({ port: 8080 });
// EVENT HANDLER: whenever a connection is made, trigger this function with a socket 
// comparing it with express to make it look easier : 
//          app.post('/todos', (req, res) => {
//                              POST LOGIC
//          })
// here, if a req is being made on /todos route, we perfom the corresponding function for post logic having req, res as params...
// similarly, in ws we don't have any routes & req, res... instead there's just "connection" and socket 
wss.on("connection", function (socket) {
    console.log("user connected");
    setInterval(() => {
        socket.send("Current price of SOL is : " + Math.random());
    }, 500);
    socket.on("message", (e) => {
        console.log(e.toString());
    });
});
