import { io } from 'socket.io-client';

const SOCKET_URL = 'https://your-socket-server.com';

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  transports: ['websocket']
});

export const connectSocket = (userId: string) => {
  socket.auth = { userId };
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};