import socket from 'socket.io'

const io = socket (5003)  //==> on lui donne un port d'écoute

export { io }