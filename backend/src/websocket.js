const socketio = require('socket.io');

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    console.log("OK");

    io.on('connection', socket => {
        console.log("CONECTOU");
        console.log(socket.id);
    });
};