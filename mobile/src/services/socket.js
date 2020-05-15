import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.12:3333', {
    autoConnect: false,
});

function connect(){
    
    socket.connect();
    console.log(socket.id);
}

function disconnect(){
    if (socket.connected){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
};