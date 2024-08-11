const { Server } = require("socket.io");
const { createServer } = require('http');
require('dotenv').config();

const SOCKET_SERVER_OPTIONS = {
    cors: {
        origin: process.env.ALLOWED_CLIENT,
        methods: ["GET", "POST", "PUT", "delete"],
        // allowedHeaders: ["my-custom-header"],
        credentials: true
    }
}

async function socketIOConnection() {
    try {
        const httpServer = createServer();
        const io = new Server(httpServer, SOCKET_SERVER_OPTIONS);

        io.on("connection", (socket) => {
            console.log("[SOCKET IO SERVER CONNECTION SUCCEEDED]");
        });

        httpServer.listen(process.env.SERVER_PORT,() => {
            console.log(`[SOCKET.IO CONNECTION ESTABLISHED AT PORT: ${process.env.SERVER_PORT}]`)
        });
    } catch (err) {
        console.log("[ERROR WHILE CONNECTING TO SOCKET.IO]:", err);
    }
}

module.exports = {
    socketIOConnection
}