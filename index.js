const WebSocket = require('ws');
const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcbusd@bookTicker");

//puxa as informacoes de simbolo, oferta e lance da binance via websockets
ws.onmessage = (event) => {
    process.stdout.write('\033c');
    const obj = JSON.parse(event.data);
    console.log(`Symbolo: ${obj.s}`);
    console.log(`Melhor oferta:${obj.a} `);
    console.log(`Melhor lance: ${obj.b}`);
}


// import { Server } from "socket.io";

// const io = new Server(3000);

// io.on("connection", (socket) => {
//     //send a message to the client
//     socket.emit("hi", "guys");

//     //receive a message from the client
//     socket.on("hii!", (arg) => {
//         console.log(arg); //print "stranger"
//     });
// });

// import { io } from "socket.io-client";

// const socket = io("ws://localhost:3000");

// //receive a message from the server
// socket.on("hello", (arg) => {
//     console.log(arg); // prints "guys"
// });

// // send a message to the server
// socket.emit("hii!", "stranger");
