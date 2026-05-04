import http from "node:http";
import path from "node:path";

import express from "express";
import { Server } from "socket.io";
import { Socket } from "node:dgram";
import { log } from "node:console";

async function main() {
    const app = express();
    const server = http.createServer(app);
    const PORT = process.env.PORT || 5000;

    //Io.configuration --
    const io = new Server();
    io.attach(server);

    //Sockets --
    io.on("connection", (socket) => {
        console.log(`Socket connect`, { id: socket.id });

        socket.on(`client:checkbox:changed`, (data) => {
            console.log(data);
            io.emit(`server:emited:data`, data);
        });
    });
    //Express --
    app.use(express.static(path.resolve("./public")));

    app.get("/health", (req, res) => {
        return res.status(200).json({ message: "Healthy" });
    });

    server.listen(PORT, () => {
        console.log(`Server is listening on http://localhost:${PORT}`);
    });
}

main();
